package com.cocos.game;

import android.Manifest;
import android.app.Activity;
import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Build;

import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

public class PermissionHelper {

    // 检查是否已授予所有权限
    public static boolean hasPermissions(Context context, String permission) {
        if (context == null || permission == null) return false;
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.M){
            return true;
        }
        return ContextCompat.checkSelfPermission(context, permission) == PackageManager.PERMISSION_GRANTED;
    }

    // 请求权限（适用于 Activity）
    public static void requestPermissions(Activity activity, String[] permissions, int requestCode) {
        //Build.VERSION_CODES.M之前权限申请都是安装的时候统一同意，之后就需要申请了
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            ActivityCompat.requestPermissions(activity, permissions, requestCode);
        }
    }
    // 检查权限
    public static boolean hasGalleryPermissions(Context context) {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.M){
            return true;
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            return ContextCompat.checkSelfPermission(context, Manifest.permission.READ_MEDIA_IMAGES) == PackageManager.PERMISSION_GRANTED;
        } else {
            return ContextCompat.checkSelfPermission(context, Manifest.permission.READ_EXTERNAL_STORAGE) == PackageManager.PERMISSION_GRANTED;
        }
    }
    public static void requestGalleryPermission(Activity activity,  int requestCode) {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.M){
            return;
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            ActivityCompat.requestPermissions(activity, new String[]{Manifest.permission.READ_MEDIA_IMAGES}, requestCode);
        } else {
            ActivityCompat.requestPermissions(activity, new String[]{Manifest.permission.READ_EXTERNAL_STORAGE}, requestCode);
        }
    }
}
