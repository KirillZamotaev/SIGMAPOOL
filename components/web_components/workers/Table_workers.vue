<template>
  <div class="table_workers" >
    <div class="block_table_filter">
      <div class="row">
        <div class="col-md-4">
          <div class="filter" id="item-pagesize">
            <button><span class="filter-button-label">Онлайн</span>  <span class="filter-indicator">{{dataset instanceof Array && dataset.hashrate !== 0 ? dataset.length : 0}}</span></button>
            <button><span class="filter-button-label">Оффлайн</span>  <span class="filter-indicator">{{dataset instanceof Array && dataset.hashrate === 0 ? dataset.length : 0}}</span></button>
            <button><span class="filter-button-label">Общее</span>  <span class="filter-indicator">{{dataset instanceof Array ? dataset.length : 0}}</span></button>
            <div class="filter-text">
              Отображаются только <b>online</b> воркеры
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="filter search" id="item-search">
            <div class="search inner">
              <input type="text" value="Поиск" />
              <i class="icon-search"></i>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="filter" id="item-pagesize">
            <span class="filter-label">
              Макс на странице:{{limit}}
            </span>

            <div class="dropdown-block">
              <span class="dropdown-active"></span>
              <ul class="dropdown-list">
                <li><button> 25</button></li>
                <li><button> 50 </button></li>
                <li><button> 100</button></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="filter" id="item-name">
            <span class="filter-label">
              Сортировать по : {{sort}}
            </span>

            <div class="dropdown-block">
              <span class="dropdown-active"></span>
              <ul class="dropdown-list">
                <li><button> Имя</button></li>
                <li><button> Последняя шара</button></li>
                <li><button> Текущий хешрейт</button></li>
                <li><button> Средний хешрейт за час</button></li>
                <li><button> Средний хешрейт за 24ч</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <table class="table_data workers" v-if="dataset !==null">
      <tr>
        <th v-for="head in headers">{{head}}</th>
      </tr>
      <tr v-for="item in dataset">
        <td>{{item.name}}</td>
        <td>{{item.lastShareTime}}</td>
        <td>{{item.hashrate}}</td>
        <td>{{item.avg1Hashrate}}</td>
        <td>{{item.avg24Hashrate}}</td>
      </tr>
    </table>
    <div class="dash_preloader" v-else>
      <img src="~assets/img/gears-anim.gif" />
    </div>
  </div>
</template> 

<script>
  export default {
    props: {
      dataset: {
        default: function () { 
          return [
            {}, {}, {}, {}, {}, {}, {}, {}, {}
          ]
        }
      },
      headers: {
        default: function () {
        return  [
        "Имя",
        "Последняя шара",
        "Текущий хешрейт", 
        "Средний хешрейт за час", 
        "Средний хешрейт за 24 часа" 
          ]
        }
      },
      page: {
        default: 1
      },
      pageSize:{
        default: 20
      }
    },
    data: function () {
      return {
        limit: 25,
        sort: "имени"
      }
    },
    mounted: function() {
     
    }
  }
</script>
