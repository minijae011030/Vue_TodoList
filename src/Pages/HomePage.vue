<template lang="">
  <div class="max-w-[500px] mx-auto py-10 px-6 text-gray-800">
    <h1 class="text-3xl font-bold mb-4 text-center">📌 ToDoList</h1>

    <p class="mb-6 leading-relaxed text-center">
      이 프로젝트는 <strong>Vue 3</strong>와 <strong>Pinia</strong>, <strong>TailwindCSS</strong>를
      기반으로 제작된 <br />간단한 일정 관리 웹 애플리케이션입니다.<br /><br />
      로그인 후 나만의 할 일을 추가하고, 수정하거나 완료할 수 있으며,<br />json-server를 통해 로컬
      API로 연동됩니다.
    </p>

    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-2">🛠 사용 기술</h2>
      <ul class="list-disc pl-5 space-y-1">
        <li>Vue 3 (Composition API)</li>
        <li>Pinia (persist 상태 관리)</li>
        <li>TailwindCSS</li>
        <li>json-server (Mock API)</li>
        <li>JavaScript (ES6+)</li>
      </ul>
    </div>

    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-2">📝 주요 기능</h2>
      <ul class="list-disc pl-5 space-y-1">
        <li>회원 로그인 / 로그아웃</li>
        <li>개인별 Todo 항목 관리 (추가, 상세, 수정, 삭제)</li>
        <li>완료 체크 상태 표시</li>
        <li>반응형 인터페이스</li>
      </ul>
    </div>

    <p class="text-center mt-8 italic text-sm text-gray-500">vue 어려워요.. 😵‍💫</p>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
