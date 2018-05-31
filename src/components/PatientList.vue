<template>
    <div>
        <v-data-table           
            v-bind:headers="headers"
            v-bind:items="patients"
            item-key="patientKey"
            class="elevation-1">
            <template slot="items" slot-scope="props" v-on:click="selectRow">
                <td>{{ props.item.patientKey }}</td>
                <td class="text-xs-left">{{ props.item.lastName }}</td>
                <td class="text-xs-left">{{ props.item.firstName }}</td>
                <td class="text-xs-left">{{ props.item.address1 }}</td>
                <td class="text-xs-left">{{ props.item.city }}</td>
                <td class="text-xs-left">{{ props.item.state }}</td>
                <td class="text-xs-left">{{ props.item.zip }}</td>
                <td>
                    <v-btn block color="primary" @click ="selectRow(props.item.patientKey)" @click.native="e6 = 0">View</v-btn>
                </td>
            </template>>
        </v-data-table>   
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'PatientList',
        data () {
            return {
                headers: [
                    {
                        text: 'patientKey',
                        align: 'left',
                        sortable: false,
                        value: 'patientKey'
                    },
                    { 
                        text: 'Last Name', 
                        value: 'lastName', 
                        align: 'left'
                    },
                    { 
                        text: 'First Name', 
                        value: 'firstName', 
                        align: 'left' 
                    },
                    { 
                        text: 'Address', 
                        value: 'address1', 
                        align: 'left' 
                    },
                    {
                        text: 'City', 
                        value: 'city', 
                        align: 'left' 
                    },
                    { 
                        text: 'State', 
                        value: 'state', 
                        align: 'left' 
                    },
                    { 
                        text: 'Zip', 
                        value: 'zip', 
                        align: 'left' 
                    },
                    { 
                        text: '', 
                        value: '' 
                    }
                ],
                patients: []
            }
        },
        methods: { 
            selectRow: function(patientKey) {
                console.log(patientKey);
                this.$router.push({path: '/patientDetail/' + patientKey});
            }
        },
        created: function() {
            axios.get(`http://localhost:10665/api/Patients`)
            .then(response => {
                this.patients = response.data;
            })
            .catch(e => {
                //this.errors.push(e);
            })
        }
    }
</script>

<style>

</style>
