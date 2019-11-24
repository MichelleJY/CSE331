package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.*;

@Controller
@SpringBootApplication
public class DemoApplication {

    @RequestMapping("/home")
    String home() {
      return "redirect:/";
    }

    @RequestMapping("/timeline")
    String timeline() {
      return "redirect:/";
    }

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}