<template>
    <v-main style="height: 100% !important">
        <v-container pa-0 fluid fill-height>
        <v-layout>
            <v-row>
            <v-flex xs12 sm6 md3>
                <v-layout fill-height justify-center>
                    <v-layout style="background-color: #EEEEEE" column class="pt-15">
                        <v-btn text @click="registerstep1">
                            <v-icon left color="warning">mdi-check-circle-outline</v-icon>
                            INTRODUCTION
                            </v-btn>
                        <v-btn text @click="registerstep2">
                            <v-icon left color="warning">mdi-check-circle-outline</v-icon>
                            YOUR OPINIONS
                            </v-btn>
                        <v-btn text @click="registerstep3">
                            <v-icon left color="warning">mdi-check-circle-outline</v-icon>
                            CURRENT PRACTICES
                            </v-btn>
                        <v-btn text @click="registerstep4">
                            <v-icon left color="warning">mdi-check-circle-outline</v-icon>
                            EXPERIENCE LEVEL
                            </v-btn>
                        <v-btn text>
                            <v-icon left color="warning">mdi-arrow-down-bold-circle-outline</v-icon>
                            ACCOUNT SETTING
                            </v-btn>
                    </v-layout>
                </v-layout>
            </v-flex>

            <v-flex xs12 sm6 md9 class="px-7">
                <v-layout justify-center fill-height px-5>
                    <v-flex class="pt-8">
                        <v-form>
                        <h3>Create an account.</h3>
                        
                        <p>Username</p>
                        <v-text-field 
                        v-model="username"
                        placeholder="Username"
                        outlined 
                        dense
                        />

                        <p>Password</p>
                        <v-text-field 
                        placeholder="Password" 
                        v-model="password"
                        outlined 
                        dense
                        />

                        <p>Confirm Password</p>
                        <v-text-field 
                        placeholder="Confirm password" 
                        v-model="confirmpassword"
                        outlined 
                        dense
                        />
                       
                       <p>Do you want to open a facilitator or member account? Or both?</p>
                       <v-card 
                        outlined 
                        max-width="700px" 
                        color="#E0E0E0"
                        class="mb-4 mt-2"
                        >
                        <v-card-text>
                           Facilitator account allows you to create projects and invite members only. 
                           Member account allows you to participate in projects only. 
                           Having both facilitator and member account gives you the flexibility to do both and 
                           you can switch between the accounts using the same username.
                        </v-card-text>
                       </v-card>
                        <v-select 
                            v-model="role"
                            :items="roleitems" 
                            outlined 
                            dense
                            placeholder="Facilitator Only"
                        />

                        <v-flex class="justify-end pl-3" row wrap>
                        <v-btn 
                         @click="registerstep4" 
                         color="#757575" 
                         class="white--text"
                         >
                         Previous step
                         </v-btn>
                        <v-spacer/>
                        <v-btn color="warning">Register!</v-btn>
                    </v-flex>
                        </v-form>
                    </v-flex>
                </v-layout>
            </v-flex>
            </v-row>
        </v-layout>
        </v-container>
    </v-main>
</template>

<script>
export default {
data(){
    return{
        role:'',
        roleitems:['Facilitator only','Member only','Both facilitator and member'],
    }
},
methods: {
    registerstep1(){
        this.$router.push({ name: "RegisterStep1"})
    },
    registerstep2(){
        this.$router.push({ name: "RegisterStep2"})
    },
    registerstep3(){
        this.$router.push({ name:"RegisterStep3"})
    },
    registerstep4(){
        this.$router.push({ name: "RegisterStep4"})
    },
}
}
</script>

<style scoped>
.v-btn{
    margin-bottom: 60px;
}

.v-text-field{
    width: 400px;
}

p{
    margin:0;
    padding:0
}
</style>>
