<template>
    <div>
    <v-row dense>
        <v-col
          class="flex-wrap"
          v-for="item in items"
          v-bind:key="item.itemId"
          cols="12"
        >
  <v-card
    outlined
    color="#bfff00"
  >
    <v-list-item three-line>
        <v-row>
            <v-col
                cols="9">
            <div class="font-weight-black">{{ item.Name }}</div>
            </v-col>
            <v-col
                cols="2"
                >
                <v-card
                    color="#ffffff"
                    >
            <v-list-item-subtitle>Items available for issuing = {{ item.Working }}</v-list-item-subtitle>
            </v-card>
            </v-col>
            <v-col
                cols="1"
                >
                <v-btn>
                    Issue
                </v-btn>
            </v-col>
        </v-row>
    </v-list-item>
  </v-card>
  </v-col
        >
      </v-row>
    </div>
</template>
<script>
import { db } from '../main.js'
export default {
    data(){
        return{
            itemId: null,
            name: null,
            damaged: 0,
            total: 0,
            working: 0,
            items: [],
            factor: 1
        }
    },
    mounted(){
        this.getItems()
    },
    methods:{
        async getItems()
        {
            /* eslint-disable */
            var itemsref = db.ref('Modules_IC');
            let item = [];
            itemsref.on('value', function(snapshot){
                for(const i in snapshot.val())
                {
                    var name = snapshot.val()[i].Particulars;
                    var working = snapshot.val()[i].Working;
                    var id = i;
                    item.push({
                        "itemId": id,
                        "Name": name,
                        "Working": working
                    });
                }
            });
            this.items = item;
        },
        /*writeUserData() {
        db.ref(this.itemId).set({
            name: this.name,
            damaged: this.damaged,
            total: this.total,
            working: this.total - this.damaged,
        });
    }*/
    }
}
</script>
<style scoped>

</style>