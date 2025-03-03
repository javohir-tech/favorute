<template>
    <div>
        <form @submit.prevent="addMovie">
            <div class="d-flex gap-3 mb-3">
                <input v-model="name" type="text" class="form-control py-2" placeholder="Kino nomi">
                <input v-model.number="viewers" type="number" class="form-control py-2"
                    placeholder="Nechi Marta Ko'rilgan">
            </div>
            <SuccessButton class="w-100 btn-success">
                Qo'shish
            </SuccessButton>
        </form>
    </div>
</template>
<script>

export default {
    data() {
        return {
            name: "",
            viewers: ""
        }
    },
    methods: {
        addMovie() {

            if (!this.name || !this.viewers) {
                alert("Iltimos Barcha Maydonlarni  Tozalang")
                return
            }

            const newMovie = {
                name: this.name,
                viewers: this.viewers,
                favorute:false,
                like: false,
                id: Date.now()
            }

            this.name = "",
            this.viewers = ""

            this.$emit("addMovie" , newMovie)

        }
    }
}
</script>
<style></style>