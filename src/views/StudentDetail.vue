<template>
    <h1>Öğrenci Detayları</h1>
    <div v-if="student">
        <h3>Öğrenci Adı: {{student.name}}</h3>
    </div>
    <div v-else>
        Bilgi Yükleniyor
    </div>
    
</template>

<script>
export default {
    props:['id'],
    data(){
        return{
            student:null
        }
    },
    mounted(){
      fetch('http://localhost:3000/students/'+this.id).then(res => res.json()).then(data=>this.student=data).catch(err => console.log(err.message))
  },
    
}
</script>

<style>

</style>