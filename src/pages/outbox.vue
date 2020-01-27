<template>
        <div class="q-pa-md">
           <h3>Исходящие</h3>
           <div class="wrap">
      <q-virtual-scroll
        type="table"
        style="max-height: 70vh"
        :items="outbox"
        draggable="true"
        v-on:dragstart="onDragStart($event)"
        class="my_table"
        id="drag"
      >
        <template v-slot:before>
          <thead class="thead-custom-sticky text-left">
            <tr>
              <th>Номер</th>
              <th>
                От кого:
              </th>
              <th>
                Кому: 
              </th>
              <th>
                Дата:
              </th>
              <th>
                Тема:
              </th>
            </tr>
          </thead>
        </template>

        <template v-slot:after>
        </template>
        <template v-slot="{ item:row, index }">
          <tr @click="text(outbox[index].text)">
            <td>#{{ index }}</td>
             <td >
               {{outbox[index].from}}
        </td>

        <td>
         {{outbox[index].to}}
        </td>
              <td>
         {{outbox[index].data}}
        </td>
                <td>
         {{outbox[index].subject}}
        </td>
          </tr>
          
        </template>
      </q-virtual-scroll>
                <q-card
                width:50px
        class="my-card black center"
        
      >
           <q-card-section>
               <q-item-label>Текст сообщения</q-item-label>
               <q-item-label caption>
         {{inform}}
               </q-item-label>
        </q-card-section>
                </q-card>
           </div>
      </div> 
</template>
<script>
export default {
data () {
    return {
      inform:'',
      leftDrawerOpen:false,
      outbox:[
          {
              from:'me',
              to:'not to me',
              data:'27.01.2019',
              subject:'Тема исходящего письма',
              text:'Vivamus congue sapien id tincidunt porttitor. Aliquam quis fringilla elit. Maecenas erat nibh, dapibus at erat eu, mollis vestibulum metus. Donec elementum porttitor turpis eget lobortis. Maecenas elementum arcu quis metus molestie dictum. Maecenas nec aliquam lorem. Curabitur laoreet odio odio, sit amet consequat quam commodo sit amet. Nulla sed enim egestas, euismod ante accumsan, auctor elit. Duis et sem vitae ligula volutpat bibendum. Nam eget justo rhoncus lacus molestie finibus. Nulla vitae nunc id velit mattis suscipit at ac justo. Mauris vitae fermentum odio. Morbi porttitor quam non dolor malesuada eleifend. Vivamus lacinia est eget urna convallis, in euismod lacus facilisis. Vivamus aliquet ut est ut gravida.'
          },
        {
              from:'user',
              to:'not to user',
              data:'17.02.2019',
              subject:'Тема исходящего письма',
              text:'Duis blandit ligula ac velit auctor semper. Quisque mattis quis erat ac dictum. Integer fermentum nisl est, scelerisque varius dolor bibendum in. Fusce cursus egestas quam sit amet convallis. In pretium pharetra metus nec bibendum. Morbi congue elit sit amet eros luctus, nec maximus purus suscipit. Aenean efficitur preti'
          }
      ],    
  }
},
methods:{
    text:function(text){
      this.inform = text
    return inform
  },
  onDragStart(event){
   console.log(event.dataTransfer.setData)
  }
}
}
</script>
<style scoped>
.my_table{
    width:50%;
}
.wrap{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.my-card{
    align-self: center;
    max-width: 50%;
}
.q-pa-md{
    display: flex;
    flex-direction: column;
}
</style>