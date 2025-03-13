/****************************************************************************
Copyright (c) 2015-2016 Chukong Technologies Inc.
Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

http://www.cocos2d-x.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
****************************************************************************/
package com.cocos.game;

import android.content.ContentValues;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.media.MediaMetadataRetriever;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.content.Intent;
import android.content.res.Configuration;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.cocos.lib.CocosHelper;
import com.cocos.lib.CocosJavascriptJavaBridge;
import com.cocos.service.SDKWrapper;
import com.cocos.lib.CocosActivity;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;

public class AppActivity extends CocosActivity {

    public static AppActivity myapp=null;
    private Uri photoUri;
    private Integer photoquality=70;
    private static final int REQUEST_IMAGE_CAPTURE = 100;
    private static final int REQUEST_IMAGE_PICK = 200;
    // 用来存储选中图片压缩后生成的文件真实路径
    private String compressedImagePath;

    /**
     * 用于保存视频信息的自定义类
     */
    public static class VideoInfo {
        public String filePath;       // 真实视频文件路径
        public long fileSize;         // 视频文件大小（字节）
        public long duration;         // 视频时长（毫秒）
        public String coverImagePath; // 封面图片的真实文件路径

        public VideoInfo(String filePath, long fileSize, long duration, String coverImagePath) {
            this.filePath = filePath;
            this.fileSize = fileSize;
            this.duration = duration;
            this.coverImagePath = coverImagePath;
        }

        @NonNull
        @Override
        public String toString() {
            return this.filePath+","+this.fileSize+","+this.duration+","+this.coverImagePath;
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // DO OTHER INITIALIZATION BELOW
        SDKWrapper.shared().init(this);
        myapp=this;
    }

    @Override
    protected void onResume() {
        super.onResume();
        SDKWrapper.shared().onResume();
    }

    @Override
    protected void onPause() {
        super.onPause();
        SDKWrapper.shared().onPause();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        // Workaround in https://stackoverflow.com/questions/16283079/re-launch-of-activity-on-home-button-but-only-the-first-time/16447508
        if (!isTaskRoot()) {
            return;
        }
        SDKWrapper.shared().onDestroy();
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        SDKWrapper.shared().onActivityResult(requestCode, resultCode, data);
        if (requestCode == REQUEST_IMAGE_CAPTURE && resultCode == RESULT_OK) {
            Toast.makeText(this, "拍照成功，图片已保存"+this.photoUri, Toast.LENGTH_SHORT).show();
            String abpath = this.compressAndCopyImage(this.photoUri);
            Toast.makeText(this, "图片压缩保存"+abpath, Toast.LENGTH_SHORT).show();
            // 此处你可以将 abpath 传递给 cocosCreator
            // 一定要在 GL 线程中执行
            CocosHelper.runOnGameThread(new Runnable() {
                @Override
                public void run() {
                    CocosJavascriptJavaBridge.evalString("window.Reflections.onSelectImgBack('"+abpath+"')");
                }
            });
        }
        if(requestCode == REQUEST_IMAGE_PICK && resultCode == RESULT_OK && data != null){
            Uri selectedMediaUri = data.getData();
            if(selectedMediaUri != null){
                String mimeType = getContentResolver().getType(selectedMediaUri);
                if (mimeType != null && mimeType.startsWith("video/")) {
                    // 选到视频，复制到真实路径（不压缩）
                    VideoInfo videoInfo = copyVideoFile(selectedMediaUri);
                    String videoPath = videoInfo.filePath;
                    if (videoPath != null) {
//                        Toast.makeText(this, "视频复制成功"+videoInfo.toString(), Toast.LENGTH_SHORT).show();
                        // 传递 videoPath 给 cocosCreator 进行后续处理
                        // 一定要在 GL 线程中执行
                        CocosHelper.runOnGameThread(new Runnable() {
                            @Override
                            public void run() {
                                CocosJavascriptJavaBridge.evalString("window.Reflections.onVideoImgBack('"+videoInfo.toString()+"')");
                            }
                        });

                    } else {
                        Toast.makeText(this, "视频复制失败", Toast.LENGTH_SHORT).show();
                    }
                }
                else{
                    // 调用压缩复制方法
                    compressedImagePath = this.compressAndCopyImage(selectedMediaUri);
                    if (compressedImagePath != null) {
//                        Toast.makeText(this, "图片压缩保存成功"+compressedImagePath, Toast.LENGTH_SHORT).show();
                        // 一定要在 GL 线程中执行
                        CocosHelper.runOnGameThread(new Runnable() {
                            @Override
                            public void run() {
                                CocosJavascriptJavaBridge.evalString("window.Reflections.onSelectImgBack('"+compressedImagePath+"')");
                            }
                        });
                        // 此处你可以将 compressedImagePath 传递给 cocosCreator

                    } else {
                        Toast.makeText(this, "压缩图片失败", Toast.LENGTH_SHORT).show();
                    }
                }

            }
        }
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        SDKWrapper.shared().onNewIntent(intent);
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        SDKWrapper.shared().onRestart();
    }

    @Override
    protected void onStop() {
        super.onStop();
        SDKWrapper.shared().onStop();
    }

    @Override
    public void onBackPressed() {
        SDKWrapper.shared().onBackPressed();
        super.onBackPressed();
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        SDKWrapper.shared().onConfigurationChanged(newConfig);
        super.onConfigurationChanged(newConfig);
    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        SDKWrapper.shared().onRestoreInstanceState(savedInstanceState);
        super.onRestoreInstanceState(savedInstanceState);
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        SDKWrapper.shared().onSaveInstanceState(outState);
        super.onSaveInstanceState(outState);
    }

    @Override
    protected void onStart() {
        SDKWrapper.shared().onStart();
        super.onStart();
    }

    @Override
    public void onLowMemory() {
        SDKWrapper.shared().onLowMemory();
        super.onLowMemory();
    }

    public static boolean hasRequestPermission(String permission){
        return PermissionHelper.hasPermissions(myapp,permission);
    }
    public static void DoRequestPermission(String permission){
        PermissionHelper.requestPermissions(myapp,new String[]{permission},999);
    }
    public static boolean hasGalleryPermissions(String a){
        return PermissionHelper.hasGalleryPermissions(myapp);
    }
    public static void DoRequestGalleryPermissions(String a){
        PermissionHelper.requestGalleryPermission(myapp,999);
    }
    public static void DoOpenCamera(String a){
        myapp.photoquality = Integer.parseInt(a);
        myapp.openCamera();
    }
    public static void DoOpenAlbum(String a,String b){

        myapp.photoquality = Integer.parseInt(b);
        myapp.openAlbum(Integer.parseInt(a));
    }

    private void openCamera() {
        Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        photoUri = createImageUri();
        if (photoUri != null) {
            intent.putExtra(MediaStore.EXTRA_OUTPUT, photoUri);
            startActivityForResult(intent, REQUEST_IMAGE_CAPTURE);
        } else {
            Toast.makeText(this, "创建图片 Uri 失败", Toast.LENGTH_SHORT).show();
        }
    }

    private Uri createImageUri() {
        ContentValues values = new ContentValues();
        values.put(MediaStore.Images.Media.DISPLAY_NAME, "IMG_" + System.currentTimeMillis() + ".jpg");
        values.put(MediaStore.Images.Media.MIME_TYPE, "image/jpeg");

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
            values.put(MediaStore.Images.Media.RELATIVE_PATH, Environment.DIRECTORY_PICTURES + "/MyApp");
        }

        return getContentResolver().insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, values);
    }
    /**
     * 读取拍照后保存的图片，通过压缩后复制到一个真实文件路径，并返回该路径
     * @param photoUri 拍照保存图片的 Content URI
     * @return 压缩后保存的文件的绝对路径，若出错返回 null
     */
    private String compressAndCopyImage(Uri photoUri) {
        try {
            // 1. 通过 ContentResolver 打开输入流读取图片数据
            InputStream is = getContentResolver().openInputStream(photoUri);
            if (is == null) {
                return null;
            }
            // 2. 解码输入流为 Bitmap 对象
            Bitmap bitmap = BitmapFactory.decodeStream(is);
            is.close();

            if (bitmap == null) {
                return null;
            }

            // 3. 创建一个新的文件保存压缩后的图片
            // 这里将文件保存在应用专属的 Pictures 目录下的 "Compressed" 文件夹中
            File outputDir = new File(getExternalFilesDir(Environment.DIRECTORY_PICTURES), "Compressed");
            if (!outputDir.exists()) {
                outputDir.mkdirs();
            }
            String outputFileName = "IMG_COMPRESSED_" + System.currentTimeMillis() + ".jpg";
            File outputFile = new File(outputDir, outputFileName);

            // 4. 压缩 Bitmap 并写入输出文件
            FileOutputStream fos = new FileOutputStream(outputFile);
            // 压缩参数：格式 JPEG，质量设为80（可根据需要调整）
            bitmap.compress(Bitmap.CompressFormat.JPEG, myapp.photoquality, fos);
            fos.flush();
            fos.close();

            // 5. 返回文件的真实路径
            return outputFile.getAbsolutePath();

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
    // 打开相册选择图片
    private void openAlbum(int mode) {
        Intent intent;
        if (mode == 0) { // 仅选择图片
            intent = new Intent(Intent.ACTION_PICK);
            intent.setDataAndType(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, "image/*");
        } else if (mode == 1) { // 仅选择视频
            intent = new Intent(Intent.ACTION_PICK);
            intent.setDataAndType(MediaStore.Video.Media.EXTERNAL_CONTENT_URI, "video/*");
        } else if (mode == 2) { // 图片和视频都可选择
            intent = new Intent(Intent.ACTION_GET_CONTENT);
            intent.setType("*/*");
            String[] mimeTypes = {"image/*", "video/*"};
            intent.putExtra(Intent.EXTRA_MIME_TYPES, mimeTypes);
        } else {
            // 参数不合法，默认选择图片
            intent = new Intent(Intent.ACTION_PICK);
            intent.setDataAndType(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, "image/*");
        }
        startActivityForResult(intent, REQUEST_IMAGE_PICK);
    }

    /**
     * 将选中的视频文件从 Content URI 复制到应用专属的目录中，
     * 同时获取视频的大小、时长以及封面图片，并返回 VideoInfo 对象
     *
     * @param videoUri 选中的视频 Content URI
     * @return 包含视频信息的 VideoInfo 对象，失败则返回 null
     */
    private VideoInfo copyVideoFile(Uri videoUri) {
        try {
            // 通过 ContentResolver 打开输入流
            InputStream inputStream = getContentResolver().openInputStream(videoUri);
            if (inputStream == null) {
                return null;
            }

            // 在应用专属的 Movies 目录下创建 "SelectedVideos" 文件夹
            File outputDir = new File(getExternalFilesDir(Environment.DIRECTORY_MOVIES), "SelectedVideos");
            if (!outputDir.exists()) {
                outputDir.mkdirs();
            }

            // 根据当前时间生成视频文件名（假设视频格式为 mp4，具体格式可根据实际情况调整）
            String outputFileName = "VID_" + System.currentTimeMillis() + ".mp4";
            File outputFile = new File(outputDir, outputFileName);

            // 将输入流的数据复制到输出文件
            FileOutputStream outputStream = new FileOutputStream(outputFile);
            byte[] buffer = new byte[4096];
            int len;
            while ((len = inputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, len);
            }
            outputStream.flush();
            outputStream.close();
            inputStream.close();

            // 获取视频文件的大小（字节数）
            long fileSize = outputFile.length();

            // 利用 MediaMetadataRetriever 获取视频时长（毫秒）和封面图片（封面图片取视频第一帧）
            MediaMetadataRetriever retriever = new MediaMetadataRetriever();
            retriever.setDataSource(outputFile.getAbsolutePath());
            String durationStr = retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_DURATION);
            long duration = durationStr != null ? Long.parseLong(durationStr) : 0;
            Bitmap coverBitmap = retriever.getFrameAtTime(10, MediaMetadataRetriever.OPTION_CLOSEST_SYNC);
            retriever.release();

            // 保存封面图片到文件，返回封面图片的真实路径
            String coverImagePath = null;
            if (coverBitmap != null) {
                // 在同一目录下保存封面图片，可根据需要另建文件夹
                String coverFileName = "COVER_" + System.currentTimeMillis() + ".jpg";
                File coverFile = new File(outputDir, coverFileName);
                FileOutputStream coverOut = new FileOutputStream(coverFile);
                // 保存为 JPEG 格式，质量设为80，可根据实际需要调整
                coverBitmap.compress(Bitmap.CompressFormat.JPEG, myapp.photoquality, coverOut);
                coverOut.flush();
                coverOut.close();
                coverImagePath = coverFile.getAbsolutePath();
            }

            // 返回包含视频路径、大小、时长和封面图片路径的信息
            return new VideoInfo(outputFile.getAbsolutePath(), fileSize, duration, coverImagePath);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }






    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }
}
