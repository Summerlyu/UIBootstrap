/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package cn.edu.fjnu.cdio.utils;

import com.google.gson.Gson;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

/**
 * Java对象与JSON串的互转工具
 * @author 蒋子良
 */
public class JsonUtil {
    public static List parseToArray(String json,Type type){
        Gson gson=new Gson();
        ArrayList resultList = gson.fromJson(json, type);
        return resultList;
    }
    
    public static Object parseToObject(String json,Class objClass){
        Gson gson=new Gson();
        return gson.fromJson(json, objClass);
    }
    
    public static String toJson(Object object){
        Gson gson=new Gson();
        return gson.toJson(object);
    }
}
