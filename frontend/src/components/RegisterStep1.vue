<template>
    <v-main style="height: 100% !important">
        <v-container pa-0 fluid fill-height>
        <v-layout>
            <v-row>
            <v-flex xs12 sm6 md3>
                <v-layout fill-height justify-center>
                    <v-layout style="background-color: #EEEEEE" column class="pt-15">
                        <v-btn text>
                            <v-icon left color="warning">mdi-arrow-down-bold-circle-outline</v-icon>
                            INTRODUCTION
                            </v-btn>
                        <v-btn text disabled>
                            <v-icon left color="warning">mdi-arrow-down-bold-circle-outline</v-icon>
                            YOUR OPINIONS
                            </v-btn>
                        <v-btn text disabled>
                            <v-icon left color="warning">mdi-arrow-down-bold-circle-outline</v-icon>
                            CURRENT PRACTICES
                            </v-btn>
                        <v-btn text disabled>
                            <v-icon left color="warning">mdi-arrow-down-bold-circle-outline</v-icon>
                            EXPERIENCE LEVEL
                            </v-btn>
                        <v-btn text disabled>
                            <v-icon left color="warning">mdi-arrow-down-bold-circle-outline</v-icon>
                            ACCOUNT SETTING
                            </v-btn>
                    </v-layout>
                </v-layout>
            </v-flex>

            <v-flex xs12 sm6 md9 class="px-7">
                <v-layout justify-center fill-height px-5>
                <v-layout column>
                    <v-flex class="pt-8">
                    <h3>Let us get to know you better.</h3>
                    <p>First Name</p>
                    <v-text-field 
                     v-model="firstname"
                     placeholder="Given Name" 
                     outlined 
                     dense
                     />
                    <p>Last Name</p>
                    <v-text-field 
                     v-model="lastname"
                     placeholder="Family Name" 
                     outlined 
                     dense
                     />
                     <p>Gender</p>
                     <v-select 
                      v-model="gender"
                      :items="genderitems" 
                      outlined 
                      dense
                      placeholder="Select gender"
                      />
                      <p>Age</p>
                      <v-select 
                      v-model="age"
                      :items="ageitems"
                      outlined
                      dense
                      placeholder="Select age"
                      />

                      <p>Q1. Which of the following best describes your role on your team?</p>
                      <p>(Please check all that apply)</p>
                      <v-flex row wrap>
                      <v-col md="6"> 
                        <v-simple-table>
                          <tbody>
                          <tr>  
                            <td>
                          <v-checkbox 
                           label="Data Labeler" 
                           value="Data Labeler"
                           v-model="q1"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                           <v-checkbox 
                           label="Data Scientist" 
                           value="Data Scientist"
                           v-model="q1"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                           <v-checkbox 
                           label="Designer" 
                           value="Designer"
                           v-model="q1"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                           <v-checkbox 
                           label="Domain/Content Expert" 
                           value="Domain/Content Expert"
                           v-model="q1"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                           <v-checkbox 
                           label="Executive/General Manager" 
                           value="Executive/General Manager"
                           v-model="q1"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                           <v-checkbox 
                           label="Product Manager" 
                           value="Product Manager"
                           v-model="q1"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                           <v-checkbox 
                           label="Project/Program Manager" 
                           value="Project/Program Manager"
                           v-model="q1"/>
                            </td>
                          </tr>
                          </tbody>
                        </v-simple-table>
                      </v-col>
                      <v-col md="6">
                          <v-simple-table>
                            <tbody>
                          <tr>
                            <td>
                          <v-checkbox 
                           label="Researcher" 
                           value="Researcher"
                           v-model="q1"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                           <v-checkbox 
                           label="Social Scientist" 
                           value="Social Scientist"
                           v-model="q1"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                           <v-checkbox 
                           label="Software Engineer" 
                           value="Software Engineer"
                           v-model="q1"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                           <v-checkbox 
                           label="Technical Lead/Manager" 
                           value="Technical Lead/Manager"
                           v-model="q1"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                           <v-checkbox 
                           label="Others" 
                           @click="unlock"
                           />
                            </td>
                          </tr>
                          </tbody>
                          </v-simple-table>
                           <p>Others (Please Specify)</p>
                            <v-text-field 
                            v-model="q1other"
                            outlined 
                            dense
                            :disabled="disabled"
                            placeholder="Others"
                            />
                      </v-col>
                      </v-flex>

                      <p>Q2. Which of the following best describe the application domains of your team’s machine learning products/services?</p>
                      <p>(Please check all that apply)</p>
                      <v-flex row wrap>
                      <v-col md="6">
                          <v-simple-table>
                            <tbody>
                          <tr>
                            <td>    
                          <v-checkbox 
                           label="Defense/Military" 
                           value="Defense/Military"
                           v-model="q2"/>
                            </td>
                          </tr>
                          <tr>
                            <td>  
                           <v-checkbox 
                           label="Media and Entertainment" 
                           value="Media and Entertainment"
                           v-model="q2"/>
                            </td>
                          </tr>
                          <tr>
                            <td>  
                           <v-checkbox 
                           label="Education" 
                           value="Education"
                           v-model="q2"/>
                            </td>
                          </tr>
                          <tr>
                            <td>  
                           <v-checkbox 
                           label="Financial Services" 
                           value="Financial Services"
                           v-model="q2"/>
                            </td>
                          </tr>
                          <tr>
                            <td>  
                           <v-checkbox 
                           label="General-purpose Machine Learning Tools (eg. APIs)" 
                           value="General-purpose Machine Learning Tools (eg. APIs)"
                           v-model="q2"/>
                            </td>
                          </tr>
                          <tr>
                            <td>  
                           <v-checkbox 
                           label="Healthcare" 
                           value="Healthcare"
                           v-model="q2"/>
                            </td>
                          </tr>
                            </tbody>
                          </v-simple-table>
                      </v-col>
                      <v-col md="6">
                          <v-simple-table>
                            <tbody>
                          <tr>
                            <td>  
                          <v-checkbox 
                           label="Government/Public Sector" 
                           value="Government/Public Sector"
                           v-model="q2"/>
                            </td>
                          </tr>
                          <tr>
                            <td>  
                           <v-checkbox 
                           label="Hiring/Recruiting" 
                           value="Hiring/Recruiting"
                           v-model="q2"/>
                            </td>
                          </tr>  
                           <tr>
                            <td>  
                           <v-checkbox 
                           label="Retail" 
                           value="Retail"
                           v-model="q2"/>
                            </td>
                           </tr>
                           <tr>
                            <td>
                           <v-checkbox 
                           label="Marketing" 
                           value="Marketing"
                           v-model="q2"/>
                            </td>
                           </tr>
                           <tr>
                            <td>
                           <v-checkbox 
                           label="Others" 
                           @click="unlock"
                           />
                            </td>
                           </tr>
                           </tbody>
                          </v-simple-table>
                           <p>Others (Please Specify)</p>
                            <v-text-field 
                            v-model="q2other"
                            outlined 
                            :disabled="disabled"
                            placeholder="Others"
                            dense
                            /> 
                      </v-col>
                      </v-flex>

                      <p>Q3. Which of the following technology areas best describe your team’s machine learning products/services?</p>
                      <p>(Please check all that apply)</p>
                      <v-flex row wrap>
                      <v-col md="6">   
                          <v-simple-table>
                            <tbody>
                          <tr>
                            <td> 
                          <v-checkbox 
                           label="Computer Vision/Image Analysis" 
                           value="Computer Vision/Image Analysis"
                           v-model="q3"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                           <v-checkbox 
                           label="Conversational AI/Chatbots" 
                           value="Conversational AI/Chatbots"
                           v-model="q3"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                           <v-checkbox 
                           label="Decision support" 
                           value="Decision support"
                           v-model="q3"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                           <v-checkbox 
                           label="Natural Language Processing" 
                           value="Natural Language Processing"
                           v-model="q3"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                           <v-checkbox 
                           label="Robotics/Cyber-physical Systems" 
                           value="Robotics/Cyber-physical Systems"
                           v-model="q3"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                           <v-checkbox 
                           label="Search/Information Retrieval" 
                           value="Search/Information Retrieval"
                           v-model="q3"/>
                            </td>
                          </tr>
                            </tbody>
                          </v-simple-table>
                      </v-col>
                      <v-col md="6">
                          <v-simple-table>
                            <tbody>
                          <tr>
                            <td>
                          <v-checkbox 
                           label="Speech and Voice" 
                           value="Speech and Voice"
                           v-model="q3"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                           <v-checkbox 
                           label="User Modeling / Adaptive Hypermedia" 
                           value="User Modeling / Adaptive Hypermedia"
                           v-model="q3"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                           <v-checkbox 
                           label="Predictive Analytics" 
                           value="Predictive Analytics"
                           v-model="q3"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                           <v-checkbox 
                           label="Recommender Systems" 
                           value="Recommender Systems"
                           v-model="q3"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                           <v-checkbox 
                           label="Others" 
                           @click="unlock"
                           />
                            </td>
                          </tr>
                          </tbody>
                          </v-simple-table>
                           <p>Others (Please Specify)</p>
                            <v-text-field 
                            v-model="q3other"
                            placeholder="Others"
                            outlined 
                            :disabled="disabled"
                            dense
                            /> 
                      </v-col>
                      </v-flex>

                      <p>Q4. Which of the following are currently part of your team’s AI/ML model-building checklist?</p>
                      <p>(Please check all that apply)</p>
                      <v-flex row wrap>
                      <v-col md="6"> 
                          <v-simple-table>
                            <tbody>
                          <tr>
                            <td>
                          <v-checkbox 
                           label="Explainability and Transparency" 
                           value="Explainability and Transparency"
                           v-model="q4"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                           <v-checkbox 
                           label="Compliance" 
                           value="Compliance"
                           v-model="q4"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                           <v-checkbox 
                           label="User Control over Data and Models" 
                           value="User Control over Data and Models"
                           v-model="q4"/>
                            </td>
                          </tr>
                            </tbody>
                        </v-simple-table>
                      </v-col>
                      <v-col md="6">
                          <v-simple-table>
                            <tbody>
                          <tr>
                            <td>
                          <v-checkbox 
                           label="Privacy" 
                           value="Privacy"
                           v-model="q4"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                           <v-checkbox 
                           label="Fairness and Bias" 
                           value="Fairness and Bias"
                           v-model="q4"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                           <v-checkbox 
                           label="None of the above" 
                           value="None of the above"
                           v-model="q4"/>
                            </td>
                          </tr>
                          <tr>
                            <td>
                           <v-checkbox 
                           label="I don’t know" 
                           value="I don’t know"
                           v-model="q4"/>
                            </td>
                          </tr>
                            </tbody>
                        </v-simple-table> 
                      </v-col>
                      </v-flex>
                      <v-flex class="justify-end" row wrap>
                        <v-btn @click="registerstep2" color="warning">Next</v-btn>
                    </v-flex>

                    </v-flex>
                </v-layout>
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
            disabled:true,
            genderitems: ['Male','Female','Prefer not to say'],
            gender:'',
            ageitems: ['18-24','25-34','35-44','45-54','55 and above','Prefer not to say'],
            age:'',
            q1:[],
            q1other:'',
            q2:[],
            q2other:[],
            q3:[],
            q3other:'',
            q4:[],
        }
    },
    methods:{
        unlock(){
            this.disabled=!this.disabled
        },
        registerstep2(){
            this.$router.push({ name: "RegisterStep2"}
            )
        },
    },
}
</script>

<style scoped>
.v-btn{
    margin-bottom: 60px;
}

.v-text-field{
    width: 300px;
}

tr, td {
  border: 1px solid black;
  padding-left: 10px;
}

p {
  margin:0;
  padding-top:0;
}

</style>>

