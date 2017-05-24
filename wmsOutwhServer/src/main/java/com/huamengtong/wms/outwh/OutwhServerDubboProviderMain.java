package com.huamengtong.wms.outwh;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.io.File;
import java.util.concurrent.CountDownLatch;

/**
 * MainServer 服务开启
 */
public class OutwhServerDubboProviderMain {

    public static void main(String[] args) throws Exception {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("classpath:outwh"+ File.separator + "spring-core.xml");
        context.start();
        System.out.println("wmsOutwhServer start success . spring  profile active ------ " + System.getProperty("spring.profiles.active"));
        new CountDownLatch(1).await();
    }
}  