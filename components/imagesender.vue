<template>
    <div>
        <div class="border border-dashed border-gray-500 relative">
         <input ref="upfile" type="file" multiple class="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50" @change="onchange">
         <div class="text-center p-10 absolute top-0 right-0 left-0 m-auto">
            <h4>
             Drop files anywhere to upload
             <br/>or
          </h4>
           <p class="">Select Files</p>
        </div>
        </div>
    <div class="m-3">
        <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center" @click="onclick">
                <span class="mr-2">Send</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                </svg>
        </button>
    </div>
    </div>
</template>
<script>
export default ({
    data(){
        return{datacloud : ""}
    },
    methods:{
        onchange() {
            // アップロードファイルを用意
            const fl = this.$refs.upfile.files[0];
            const data= new FormData();
            data.append('upfile', fl, fl.name);
            this.datacloud=data;
            // eslint-disable-next-line no-unused-expressions
        },
        onclick(){
            fetch('',{
            method:'POST',
            body:this.data,
            })
            .then(function(response){
                return response.text();
            })
            .then(function(text){
                this.message = text;
            })
            .catch(function (error){
                window.alert('Error:'+ error.message);
            });
        }
    }
})
</script>
