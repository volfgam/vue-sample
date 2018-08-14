var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        loaded: false,
        custumers: [],
        name: null,
        age: null,
        city: null,
        number: 0,
        result: 0
    },
    methods: {
        getMessage: function () {
            var self = this;
            self.message = "Hello vue!"
        },
        getData: function () {
            var self = this;
            self.custumers = GetCustumers();
        },
        addCustumer: function () {
            var self = this;
            var custumer = {
                name: self.name,
                age: self.age,
                city: self.city
            }

            self.custumers.push(custumer);
            self.name = null;
            self.age = null;
            self.city = null;
        },
        calculate: function (number) {
            var self = this;
            self.result = parseInt(number) * 5;
        },
        removeElement: function (index){
            this.custumers.splice(index, 1);
            console.log(index);
        }
    },
    watch: {
        number: function (newNumber, oldNumber) {
            if (newNumber == "")
                return false;
            this.calculate(newNumber);
        }
    },
    mounted: function() {
        this.loaded = true;
    }
})

function GetCustumers() {
    return [{
            name: "Marcus Costa Braga",
            age: 37,
            city: "Porto Alegre"
        },
        {
            name: "Artur Mezenga",
            age: "40",
            city: "Rio de Janeiro"
        },
        {
            name: "Felizberto Moraes",
            age: "32",
            city: "Alvorada"
        },
        {
            name: "Reginaldo Alberto",
            age: "22",
            city: "Florianopolis"
        }
    ]
}