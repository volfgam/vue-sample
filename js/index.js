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
        result: 0,
        showPapel: false,
        ifPanel: false,
        rawHtml: '<span class="label label-primary">Here is a label</span>',
        isActive: true,
        hasError: false
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
        removeElement: function (index) {
            this.custumers.splice(index, 1);
        },
        showHidePanel: function () {
            var self = this;
            self.showPapel = !self.showPapel;
        },
        renderElement: function () {
            var self = this;
            self.ifPanel = !self.ifPanel;
        },
        setError: function () {
            this.hasError = !this.hasError;
            this.isActive = !this.isActive;
        }
    },
    watch: {
        number: function (newNumber, oldNumber) {
            if (newNumber == "")
                return false;
            this.calculate(newNumber);
        }
    },
    created: function () {
        this.loaded = true;
        this.getData();
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