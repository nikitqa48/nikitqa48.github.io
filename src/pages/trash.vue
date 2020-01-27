<template>
               <div class="wrap">
      <q-virtual-scroll
        type="table"
        style="max-height: 70vh"
        :items="trash"
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
          <tr @click="text(trash[index].text)">
            <td>#{{ index }}</td>
             <td >
               {{trash[index].from}}
        </td>

        <td>
         {{trash[index].to}}
        </td>
              <td>
         {{trash[index].data}}
        </td>
                <td>
         {{trash[index].subject}}
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
</template>
<script>
export default {
    data () {
        return {
            inform: '',
            trash:[
                {
                    data:'12.12.12',
                    from: 'me',
                    to: 'you',
                    email:'123@mail.ru',
                    text:'GitHub — крупнейший веб-сервис для хостинга IT-проектов и их совместной разработки. Веб-сервис основан на системе контроля версий Git и разработан на Ruby on Rails и Erlang компанией GitHub, Inc',
                    subject:'Тема удаленного письма'
                }
            ]
        }
    },
    methods:{
        text:function(text){
            this.inform = text
            return inform
        }
    }
}
</script>