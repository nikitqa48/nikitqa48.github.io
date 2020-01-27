
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
        <div></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
      
    >
      <q-list bordered padding class="rounded-borders text-primary">
      <a href="inbox" class="a">
      <q-item
        clickable
        v-ripple
        :active="link === '/inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="inbox" />
        </q-item-section>

        <q-item-section>Входящие({{inbox.length}})</q-item-section>
      </q-item>
      </a>
      <a href="outbox" class="a">
      <q-item
        clickable
        v-ripple
        :active="link === 'outbox'"
        @click="link = 'outbox'"
        active-class="my-menu-link"
      >
      
        <q-item-section avatar>
          <q-icon name="send" />
        </q-item-section>

        <q-item-section>Исходящие</q-item-section>
      </q-item>
    </a>
    <a href="/trash" class="a">
      <q-item
        clickable
        v-ripple
        :active="link === 'trash'"
        @click="link = 'outbox'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="delete" />
        </q-item-section>

        <q-item-section>Корзина</q-item-section>
      </q-item>
    </a>
    </q-list>
    </q-drawer>
    <q-page-container>
     <router-view>  </router-view>
    </q-page-container>
    
  </q-layout>
</template>

<script>
export default {
data () {
    return {
      inform:'',
      link:'/inbox',
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
      outbox:[
        {
          from:'fromme',
          to:'to me'
        },
        
      ],
      trash:[
        {
          trash:'trash'
        }
      ],    
   columns:[
  { name1: 'Дата:', name2: 'asd', prop: 'name' },
  { name1: 'Кому:', name2: 'Calories', prop: 'calories' },
  { name1: 'От кого:', name2: 'Fat', prop: 'fat' },
  { name1: 'Тема:', name2: 'Carbs', prop: 'carbs' },
]
  }
},
  methods:{
    text:function(text){
      this.inform = text
    return inform
  },
  rembo:function(){
    alert(2)
  }  
}
}
</script>
<style scoped>
.wrapp{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.flex{
  display: flex;
  text-align: left;
  flex-direction: column;
}
.list{
  display: flex;
  justify-content: space-around
}
.my-card text-white{
  max-width: 50%;
}
.a{
 text-decoration: none;
 color:#1E88E5;
}
</style>