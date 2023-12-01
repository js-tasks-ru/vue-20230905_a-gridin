<template>
  <div class="image-uploader">
    <label class="image-uploader__preview" :class="{ 'image-uploader__preview-loading': hasUpload }" :style="styleUrl">
      <span class="image-uploader__text">{{ text }}</span>
      <input
        ref="inputFile"
        v-bind="$attrs"
        type="file"
        accept="image/*"
        class="image-uploader__input"
        @change="onChange"
        @click="onClick"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'UiImageUploader',
  props: {
    preview: String,
    uploader: Function,
  },
  data() {
    return {
      hasUpload: null,
      hasImage: this.preview,
    };
  },
  inheritAttrs: false,
  computed: {
    text() {
      if (this.hasUpload) return 'Загрузка...';
      if (this.hasImage) return 'Удалить изображение';
      else return 'Загрузить изображение';
    },
    styleUrl() {
      return this.hasImage ? { '--bg-url': `url(${this.hasImage}` } : {};
    },
  },
  methods: {
    onClick(event) {
      if (this.hasUpload || this.hasImage) event.preventDefault();
      if (!this.hasUpload && this.hasImage) this.removeImage();
    },
    removeImage() {
      this.hasImage = null;
      this.$refs.inputFile.value = null;
      this.$emit('remove');
    },
    onChange(event) {
      const file = event.target.files[0];
      this.hasImage = URL.createObjectURL(file);
      this.$emit('select', file);
      if (this.uploader) this.onUploadImage(file);
    },
    async onUploadImage(file) {
      try {
        this.hasUpload = true;
        const result = await this.uploader(file);
        this.$emit('upload', result);
      } catch (error) {
        this.removeImage();
        this.$emit('error', error);
      } finally {
        this.hasUpload = false;
      }
    },
  },
  emits: ['remove', 'upload', 'select', 'error'],
};
</script>

<style scoped>
.image-uploader {
}

.image-uploader__input {
  opacity: 0;
  height: 0;
}

.image-uploader__preview {
  --bg-url: var(--default-cover);
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), var(--bg-url);
  border: 2px solid var(--blue-light);
  border-radius: 8px;
  transition: 0.2s border-color;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 512px;
  height: 228px;
}

.image-uploader__text {
  color: var(--white);
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}

.image-uploader__preview:hover {
  border-color: var(--blue);
}

.image-uploader__preview.image-uploader__preview-loading {
  cursor: no-drop;
}
</style>
