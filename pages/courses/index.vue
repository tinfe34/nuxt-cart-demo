<template>
  <div v-if="pending">Loading ...</div>
  <div
    class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    v-else
  >
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">
      A broad selection of courses
    </h2>

    <div
      class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-6"
    >
      <Product
        v-for="course in courseList"
        :key="course.maKhoaHoc"
        :course="course"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Product from "@/components/Product";
export default {
  async setup() {
    const state = {
      courseList: ref([]),
    };

    //Get courses
    try {
      const { pending, data } = useLazyFetch(
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
      );
      state.courseList = data;
    } catch (err) {
      console.log(err);
    }

    return {
      courseList: state.courseList,
    };
  },
  components: {
    Product,
  },
};
</script>

<style lang="scss" scoped></style>
