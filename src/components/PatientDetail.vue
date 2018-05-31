<template>
    <div>
        <h2>Detail</h2>
        {{patientKey}} <br>
            <v-text-field 
                class = "max30Char"
                display: inline
                v-model=patient.lastName
                :counter="30"
                label="Last Name: "
                required
            />
            <v-text-field 
                class = "max30Char"
                display: inline
                v-model=patient.firstName
                :counter="30"
                label="First Name: "
                required
            />
        ClinicalDate: {{patient.clinicalDate}} <br>
        ClinicalLocation: {{patient.clinicalLocation}} <br>
        ClinicalTrialPatient: {{patient.clinicalTrialPatient}} <br>
        <div class="clinicalNotes">
            <h3>Clinical Notes</h3>
            <Notes v-bind:notes="patient.clinicalNotes"/>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Notes from '@/components/Notes'

    export default {
        name: 'PatientDetail',
        props: [
            'patientKey'
        ],
        data (){
            return {
                patient: {}
            }
        },
        components: {
            Notes
        },
        created: function() {
            console.log('PatientDetail:Created');
            axios.get(`http://localhost:10665/api/Patients/` + this.patientKey)
            .then(response => {
                console.log(response.data);
                this.patient = response.data;
            })
            .catch(e => {
                //this.errors.push(e);
            })
            console.log(this.patient.clinicalNotes);
        },
        methods: {
            valid: function() {
                return true;
            }
        }
    }
</script>

<style>
    .clinicalNotes {
        background-color: lightskyblue;
    }
    .max30Char {
        width: 30em;
    }

</style>
