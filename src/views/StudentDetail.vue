<template>
    <h1>Öğrenci Detayları</h1>
    <h3>Öğrenci Id'si: {{$route.params.id}}</h3>
    <h3>{{id}}</h3>
</template>

<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
        }
    },
}
</script>

<style>

</style>