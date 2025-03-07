<template>
    <div class="d-flex  justify-content-center">
        <ul class="pagination">
            <li @click="$emit('toggleButton', 'back')" class="page-item">
                <span class="page-link">
                    <span aria-hidden="true">&laquo;</span>
                </span>
            </li>
            <li @click="$emit('togglePage', pageNumber)" v-for="pageNumber in pageNumbers" class="page-item "><span
                    class="page-link" :class="{ 'active': pageNumber === page }">
                    {{ pageNumber }}
                </span></li>
            <li @click="$emit('toggleButton', 'next')" class="page-item">
                <span class="page-link">
                    <span aria-hidden="true">&raquo;</span>
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        pageNumbers: {
            type: Number,
            required: true
        },
        page: {
            type: Number,
            required: true
        }
    }
}
</script>
<style></style>