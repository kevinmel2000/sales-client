<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-0 pt-5 pt-md-8">
            
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <sales-table title="Sales Table"></sales-table>
                </div>
            </div>            
        </div>

    </div>
</template>
<script>
  import SalesTable from './Tables/SalesTable'
  export default {
    name: 'tables',
    components: {
      SalesTable
    }
  };
</script>
<style></style>
