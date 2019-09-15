<template>
  <demo-card title="<code> Theme: idea, Mode: text/x-java" href="https://github.com/martSforever/vue-codemirror-editor/blob/master/example/demo/demo4-java.vue">
    <vue-codemirror-editor
      v-model="code"
      :option="{
                    mode:'text/x-java',
                    theme:'idea',
                }"/>
  </demo-card>
</template>

<script>
  import VueCodemirrorEditor from 'vue-codemirror-editor'
  import CodeMirror from 'codemirror'
  import 'codemirror/lib/codemirror.css'
  import 'codemirror/mode/htmlmixed/htmlmixed'
  import 'codemirror/addon/selection/active-line.js'

  window.CodeMirror = CodeMirror

  import 'codemirror/mode/clike/clike'
  import 'codemirror/theme/idea.css'

  const code =
    `package com.martsforever.plain.base.upload;

import com.martsforever.plain.core.basic.BasicMapper;
import com.martsforever.plain.core.basic.BasicServiceImpl;
import com.martsforever.plain.core.basic.ConstantUtils;
import com.martsforever.plain.core.db.Generator;
import com.martsforever.plain.core.utils.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import java.io.File;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

@Service
public class UploadServiceImpl extends BasicServiceImpl<Upload> implements UploadService {

    @Resource
    private UploadMapper uploadMapper;

    @Resource
    private Generator generator;

    @Resource
    private ConstantUtils constantUtils;

    @Override
    public BasicMapper<Upload> basicMapper() throws Exception {
        return uploadMapper;
    }

    @Override
    @Transactional
    public Upload saveFile(MultipartFile file, String headId, String module) throws Exception {
        Upload upload = this.newUpload(file, headId, module);
        this.saveUploadFile(file, upload);
        this.insert(upload);
        upload = this.queryOne(upload);
        return upload;
    }

    @Override
    @Transactional
    public List<Upload> saveFiles(List<MultipartFile> files, String headId, String module) throws Exception {
        if (files == null || files.size() == 0) {
            throw new RuntimeException("文件不能为空！");
        }
        List<Upload> uploads = this.newUpload(files, headId, module);
        List<Upload> newUploads = new ArrayList<>();
        for (int i = 0; i < uploads.size(); i++) {
            Upload upload = uploads.get(i);
            MultipartFile file = files.get(i);
            this.saveUploadFile(file, upload);
        }
        for (Upload upload : uploads) {
            this.uploadMapper.insert(upload);
            newUploads.add(this.queryOne(upload));
        }
        return newUploads;
    }

    public Upload newUpload(MultipartFile file, String headId, String module) {
        if (file == null || file.isEmpty()) {
            throw new RuntimeException("文件不能为空！");
        }
        Upload upload = new Upload();
        upload.setId(BigInteger.valueOf(generator.next()));
        upload.setName(UploadUtils.getFileNameByOriginalFileName(file.getOriginalFilename()));
        upload.setHeadId(headId);
        upload.setModule(module);
        upload.setSize(String.valueOf(file.getSize()));
        upload.setId(BigInteger.valueOf(generator.next()));
        return upload;
    }

    public List<Upload> newUpload(List<MultipartFile> files, String headId, String module) {
        List<Upload> uploads = new ArrayList<>();
        for (MultipartFile file : files) {
            Upload upload = this.newUpload(file, headId, module);
            uploads.add(upload);
        }
        return uploads;
    }

    public void saveUploadFile(MultipartFile file, Upload upload) throws Exception {
        StringBuffer path = new StringBuffer("/");
        if (!StringUtils.isBlank(upload.getModule())) {
            path.append(upload.getModule() + "/");
        }
        path.append(upload.getId() + "/" + upload.getName());
        upload.setUrl(path.toString());
        File saveFile = new File(constantUtils.getUploadPath() + upload.getUrl());
        File parentFile = saveFile.getParentFile();

        if (!parentFile.exists()) {
            Boolean mkdir = parentFile.mkdirs();
            if (!mkdir) {
                throw new Exception("创建文件夹失败" + saveFile.getParentFile().getAbsolutePath());
            }
        }
        saveFile.createNewFile();
        file.transferTo(saveFile);
    }
}`

  export default {
    name: "demo4-java",
    components: {VueCodemirrorEditor},
    data() {
      return {
        code,
      }
    },
  }
</script>

<style lang="scss">

</style>
