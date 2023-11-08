<template>
  <h1>Glissez les noms vers le bon animal</h1>
  <div class="row">
    <div class="column">
      <h3>Images</h3>
      <div class="row">
        <div class="column">
          <img src="../assets/baleine.jpg" alt="Animal 1" />
        </div>
        <div class="column">
          <draggable
            class="list-group"
            :list="list2"
            group="animals"
            @change="log"
            itemKey="name"
          >
            <template #item="{ element: animal}">
              <div class="list-group-item">{{ animal.name }} </div>
            </template>
          </draggable>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <img src="../assets/dauphin.jpg" alt="Animal 2" />
        </div>
        <div class="column">
          <draggable
            class="list-group"
            :list="list3"
            group="animals"
            @change="log"
            itemKey="name"
          >
            <template #item="{ element: animal}">
              <div class="list-group-item">{{ animal.name }} </div>
            </template>
          </draggable>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <img src="../assets/tortue.jpg" alt="Animal 3" />
        </div>
        <div class="column">
          <draggable
            class="list-group"
            :list="list4"
            group="animals"
            @change="log"
            itemKey="name"
          >
            <template #item="{ element: animal}">
              <div class="list-group-item">{{ animal.name }} </div>
            </template>
          </draggable>
        </div>
        
      </div>
      <div class="row">
        <div class="column">
          <img src="../assets/phoque.jpg" alt="Animal 4" />
        </div>
        <div class="column">
          <draggable
            class="list-group"
            :list="list5"
            group="animals"
            @change="log"
            itemKey="name"
          >
            <template #item="{ element: animal}">
              <div class="list-group-item">{{ animal.name }} </div>
            </template>
          </draggable>
        </div>
      </div>    
    </div>

    <div class="column">
      <h3>Names</h3>
      <draggable
        class="list-group"
        :list="list1"
        group="animals"
        @change="log"
        itemKey="name"
      >
        <template #item="{ element: animal }">
          <div class="list-group-item">{{ animal.name }} </div>
        </template>
      </draggable>
      
    </div>
  </div>
  <button type="submit" @click="check">Valider</button>
  <p id="Result" style="display: none;">Bonnes options sélectionnée !</p>
</template>
<script>
import draggable from "vuedraggable";

export default {
  name: "Animals",
  display: "Animals",
  order: 1,
  components: {
    draggable
  },
  data() {
    return {
      list1: [
        { name: "Baleine", id: 1 },
        { name: "Dauphin", id: 2 },
        { name: "Tortue", id: 3 },
        { name: "Phoque", id: 4 }
      ],
      list2: [
        
      ],
      list3: [
        
      ],
      list4: [
        
      ],
      list5: [
        
        ]
    };
  },
  methods: {
    check: function() {
      window.console.log(this.list2);
      if(this.list2.filter((data) => data.name == "Baleine").length == 1 && this.list3.filter((data) => data.name == "Dauphin").length == 1 && this.list4.filter((data) => data.name == "Tortue").length == 1 && this.list5.filter((data) => data.name == "Phoque").length == 1) {
        window.console.log(this.list2.filter((data) => data.name == "Baleine").length);
        document.getElementById("Result").style.display = "block";
      } else {
        console.log("Raté");
        document.getElementById("Result").style.display = "none";
      }
    },
    log: function(evt) {
      window.console.log(evt);
    }
  }
};
</script>
<style>
* {
  box-sizing: border-box;
  color: black
}

/* Create two equal columns that floats next to each other */
.column {
  float: left;
  width: 50%;
  padding: 10px;
  height: 100%;
}

.row {
  width: 100%;
  place-items: center;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

img {
  max-width: 100%;
  max-height: 150px;
}

.list-group {
  border-radius: 10px;
  border: solid 2px black;
  min-height: 30px;
  color: #000;
}
.list-group-item {
  border-radius: 25px;
  border: solid 1px black;
  margin: 3px 18px;
  background-color: #d2edd3;
}
</style>