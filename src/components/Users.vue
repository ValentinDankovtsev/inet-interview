<template>
    <v-card max-width="450" class="mx-auto">
        <Transition name="slide-fade">
            <v-list v-if='filterUsers.length' three-line>
                <transition-group name="list" tag="div">
                    <template v-for="(item, index) in filterUsers">
                        <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>
                        <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>
                        <v-list-item v-else :key="item.title">
                            <v-list-item-avatar style="cursor:pointer">
                                <v-img :src="item.avatar" @click="openAddress(item)"></v-img>
                            </v-list-item-avatar>
                            <template>
                            </template>
                            <v-list-item-content>
                                <v-list-item-title v-html="item.title"></v-list-item-title>
                                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                </transition-group>
            </v-list>
            <v-alert v-else border="left" color="red" elevation="8" text type="warning">Ничего не найдено</v-alert>
        </Transition>

        <v-dialog v-model="dialog" max-width="600">
            <v-card>
                <v-card-title class="headline">
                    User address:
                </v-card-title>
                <v-card-text>
                    {{ currentUser.address }}
                </v-card-text>
                <v-card-actions class="text-center">
                    <v-btn color="mx-auto primary" width="150" @click="dialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-card>

</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
    name: 'Users',

    data: () => ({
        dialog: false,
        currentUser: {}
    }),

    mounted() {
        this.getUsers()
    },

    computed: {
        ...mapGetters([
            'users',
            'filterCountry',
            'filterSort',
            'isLoading'
        ]),
        filterUsers() {
            let country = this.filterCountry;
            let sort = this.filterSort;

            if (this.filterCountry == 'all' && this.filterSort == 'all') {
                return this.users
            } else {
                return this.users.filter(user => {
                    return (country === 'all' || user.country === country) && (sort === 'all' || this.sortBySort(sort, user.sort));
                })
            }
        }
    },

    methods: {
        ...mapActions([
            'getUsers',
            'addFilterCountry',
            'addFilterSort'
        ]),
        ...mapMutations([
            'setLoading',
        ]),

        sortBySort(sort, sortuser) {
            if (sort) {
                const sign = sort[0];
                const number = sort.replace(/\D/g, '');

                if (sign === ">") {
                    return +sortuser > number
                } else {
                    return +sortuser < number
                }
            }
        },
        openAddress(user) {
            this.currentUser = user;
            this.dialog = true;
        },
        closeDialog() {
            this.dialog = false;
        }
    }
}
</script>

<style>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-120px);
    opacity: 0;
}


.list-item {
    display: inline-block;
    margin-right: 10px;
}

.list-enter-active,
.list-leave-active {
    transition: all 1s;
}

.list-enter,
.list-leave-to {
    opacity: 0;
    transform: translateX(-130px);
}
</style>