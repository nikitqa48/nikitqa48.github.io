<template>
         <div class="q-pa-md">
           <h3>Входящие</h3>
      <q-virtual-scroll
        type="table"
        style="max-height: 70vh"
        :items="inbox"
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
          <tr @click="text(inbox[index].text)">
            <td>#{{ index }}</td>
             <td >
               {{inbox[index].from}}
        </td>

        <td>
         {{inbox[index].to}}
        </td>
              <td>
         {{inbox[index].date}}
        </td>
                <td>
         {{inbox[index].subject}}
        </td>
          </tr>
          
        </template>
      </q-virtual-scroll>
                <q-card
        class="my-card text-white"
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
           <q-card-section>
         {{inform}}
        </q-card-section>
                </q-card>
      </div>
</template>

<script>
export default {
data () {
    return {
      inform:'',
      leftDrawerOpen:false,
      inbox:[
        {
        date: '01-01-2020',
        subject:'Тема письма',
        from:'mail@mail.ru1',
        to:'mailto@mailto.ru1',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
         date: '15-01-2013',
        subject:'Тема письма2',
        from:'mail@mail123.ru2',
        to:'mailto@mailto.ru2',
        text:'alesuada proin libero nunc consequat interdum varius sit amet. Mi ipsum faucibus vitae aliquet nec ullamcorper. Vestibulum mattis ullamcorper velit sed ullamcorper morbi'
      },
        {
         date: '27-11-2020',
        subject:'Тема письма23',
        from:'mail@mail123.ru3',
        to:'mailto@mailto.ru3',
        text:'Nunc id cursus metus aliquam eleifend mi. Sed lectus vestibulum mattis ullamcorper velit. Urna et pharetra pharetra massa. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Vitae congue eu consequat ac. Tortor at auctor urna n'
      }
      ],
      trash:[
        {
          trash:'trash'
        }
      ],    
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