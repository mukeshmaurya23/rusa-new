<template>
    <div class="Card container">
        <div class="columns is-multiline">
            <div v-for="(itm, index) in data" class="column is-one-third" :key="index">
                <div class="box">
                    <div class="title"> {{ itm.program }} </div>
                    <div class="content">
                        {{ itm.about }}
                    </div>
                    <!-- drop -->
                    <div class="dropdown is-hoverable">
                        <div class="dropdown-trigger">
                            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                                <span>Courses</span>
                                <span class="icon pr-1">
                                    <span class="iconify" data-icon="eva:arrow-ios-downward-outline"></span>
                                </span>
                            </button>
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                            <!-- params = program:A , id:0 -->
                            <div class="dropdown-content">
                                <router-link v-for="(prg, index) in itm.subprogram" class="dropdown-item" :key="index" :to="{name:'program',params:{program:itm.program,id:index}}">
                                    {{ prg.program }}
                                    <hr class="dropdown-divider">
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex';
export default {
    name: "Card",
    data() {
        return {
            val: 2
        }
    },
    computed: {
        ...mapState(['data']),
    },
    methods: {
        ...mapActions(['fetchData']),
        toggle(id) {
            let a = document.getElementById(id).classList.add()
            // .classList.add("is-active");
            console.log(a)
        },
        close(id) {
            document.getElementById(id).classList.remove("is-active")
        }
    }
};
</script>