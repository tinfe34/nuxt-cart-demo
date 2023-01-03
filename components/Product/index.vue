<template>
  <nuxt-link
    :to="`course-detail/${course.maKhoaHoc}`"
    class="group"
    :key="course.maKhoaHoc"
  >
    <div
      class="aspect-w-1 w-full h-48 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-48"
    >
      <img
        :src="course.hinhAnh"
        :alt="course.tenKhoaHoc"
        class="h-full w-full object-cover object-center group-hover:opacity-75"
      />
    </div>
    <h3 class="mt-4 text-sm text-gray-700">
      {{ course.tenKhoaHoc }}
    </h3>
    <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
  </nuxt-link>
</template>

<script>
export default {
  setup() {
    return {};
  },
  props:{
    course :{
      type: Object,
      default: {}
    }
  }
};
</script>

<style lang="scss" scoped></style>
