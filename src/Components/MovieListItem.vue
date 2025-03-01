<template>
    <li class="mt-3">
        <div class="d-flex justify-content-between" :class="[kino.favorute ? 'text-warning' : '']">
            <div>
                <h3>{{ kino.name }}</h3>
            </div>
            <div class="d-flex gap-5 align-itmes-center">
                <h3 class="mb-0">{{ kino.viewers }}</h3>
                <div class="d-flex gap-3">
                    <button @click="$emit('favourite-toggle', kino.id)" class="btn btn-secondary text-warning">
                        <i class="bi bi-film"></i>
                    </button>
                    <button @click="$emit('delete-toggle', kino.id)" class="btn btn-secondary text-danger"><i
                            class="bi bi-trash-fill"></i></button>
                    <button class="btn btn-secondary text-warning" @click="$emit('like-toggle')"><i class="bi"
                            :class="[kino.like ? 'bi-star-fill' : 'bi-star']"></i></button>
                </div>
            </div>
        </div>
    </li>
</template>
<script>
export default {
    props: {
        kino: {
            type: Object,
            required: true
        }
    },
    emits: ['favourite-toggle', 'delete-toggle', 'like-toggle']
}
</script>
<style></style>