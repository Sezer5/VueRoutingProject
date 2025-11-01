<template>
  <div class="home">
      <h2>Öğrencilerim</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non ut inventore reprehenderit, dolor sit ratione illo assumenda laboriosam quod, cum voluptates dolores blanditiis nisi molestias reiciendis in quaerat! Nam, dolores.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nam at ipsam neque iste dolor vero. Sed reiciendis exercitationem eos, deserunt vel nisi ipsa vero quos voluptatum itaque, maxime molestias.</p>
      <div v-for="student in students" v-bind:key="id">
          {{student.name }}
      </div>
  </div>
</template>

<script>


export default {
  name: 'StudentsView',
  components: {
    
  },
  data(){
    return{
      students:[
        {
          name:'Sezer',
          id:1
        },{
          name:'Seda',
          id:2
        }
      ]
    }
  }
}
</script>
