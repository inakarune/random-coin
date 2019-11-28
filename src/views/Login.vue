<template>
    <div class="window-box">
        <Titlebar />
        <div class="box-content">
            <button class="left" @click="login(63)">ID: +63 9455960228</button>
            <button class="right" @click="login(82)">ID: +82 01054916543</button>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Titlebar from '@/components/Titlebar.vue';
declare const window: any;
const { ipcRenderer } = window.require('electron');

@Component({
    components: {
        Titlebar
    }
})
export default class Login extends Vue {
    
    private login(num: string) {
        ipcRenderer.send('showAfterLogin', { id: num });
    }

	private exit(): void {
		ipcRenderer.send('exit');
	}
}
</script>
<style lang="scss" scoped>
@import '../assets/css/window.scss';
button {
    width: 160px;
    height: 160px;
    line-height: 160px;
    border-radius: 10px;
    font-size: 14px;
    background-color: white;
    justify-content: space-between;
}
.left {
    border: 1px solid #00c89c;
    color: #00c89c;
}
.left:hover {
    background-color: #00c89c;
    color: white;
}
.right {
    border: 1px solid #ff9b00;
    color: #ff9b00;
}
.right:hover {
    background-color: #ff9b00;
    color: white;
}
</style>
