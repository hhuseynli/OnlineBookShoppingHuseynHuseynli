package com.bookShopping.controller.file;

import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.bookShopping.storage.StorageFileNotFoundException;
import com.bookShopping.storage.StorageService;

@RestController
@RequestMapping(FileDownloadRestController.BASE_URL)
@CrossOrigin(origins = "*")
public class FileDownloadRestController {
    public static final String BASE_URL = "/filedownload";


    private final StorageService storageService;

    public FileDownloadRestController(StorageService storageService) {
        this.storageService = storageService;
    }


    @GetMapping("/files/{filename:.+}")
    @ResponseBody
    public ResponseEntity<Resource> serveFile(@PathVariable String filename) {

        Resource file = storageService.loadAsResource(filename);
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + file.getFilename() + "\"").body(file);
    }


    @ExceptionHandler(StorageFileNotFoundException.class)
    public ResponseEntity<?> handleStorageFileNotFound(StorageFileNotFoundException exc) {
        return ResponseEntity.notFound().build();
    }


}
