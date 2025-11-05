<template>
        <div class="studentsDetail">


        <h1>Öğrenci Detayları</h1>
        <div v-if="student">
            <h3>Öğrenci Adı: {{student.name}}</h3>
        </div>
        <div v-else>
            Bilgi Yükleniyor
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props:['id'],
    data(){
        return{
            student:null
        }
    },
    mounted(){
    //   fetch('http://localhost:3000/students/'+this.id).then(res => res.json()).then(data=>this.student=data).catch(err => console.log(err.message)),
            axios.get('http://localhost:3000/students/'+this.id)
        .then(response => this.student=response.data)
        .catch(function (error) {
            // handle error
            console.log(error);
        });

  },
    
}
</script>

<style>
    .studentsDetail,.home{
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
        max-width: 600px;
        width: 100%;
        padding: 30px;
        border-radius: 20px;
        margin:20px auto;
    }
</style>