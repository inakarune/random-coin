<template>
  <div class="home">
	<table>
		<thead>
			<th>매도</th>
			<th>호가</th>
			<th>매수</th>
		</thead>
		<tbody>
			<tr>
				<td class="mint-letter">366783.0</td>
				<td class="red-letter">0.0000733</td>
				<td></td>
			</tr>
			<tr>
				<td class="mint-letter">366783.0</td>
				<td class="red-letter">0.0000733</td>
				<td></td>
			</tr>
			<tr>
				<td class="mint-letter">366783.0</td>
				<td class="red-letter">0.0000733</td>
				<td></td>
			</tr>
			<tr>
				<td class="mint-letter">366783.0</td>
				<td class="red-letter">0.0000733</td>
				<td></td>
			</tr>
			<tr>
				<td class="mint-letter">366783.0</td>
				<td class="red-letter">0.0000733</td>
				<td></td>
			</tr>
			<tr>
				<td></td>
				<td class="red-letter">0.0000733</td>
				<td class="orange-letter">350000.0</td>
			</tr>			
			<tr>
				<td></td>
				<td class="red-letter">0.0000733</td>
				<td class="orange-letter">350000.0</td>
			</tr>	
			<tr>
				<td></td>
				<td class="red-letter">0.0000733</td>
				<td class="orange-letter">350000.0</td>
			</tr>
			<tr>
				<td></td>
				<td class="red-letter">0.0000733</td>
				<td class="orange-letter">350000.0</td>
			</tr>
			<tr>
				<td></td>
				<td class="red-letter">0.0000733</td>
				<td class="orange-letter">350000.0</td>
			</tr>			
		</tbody>
	</table>
    <form>
		<div class="input-box">
			<label>매도 Max</label>
			<input type="number">
		</div>
		<div class="input-box">
			<label>매도 Min</label>
			<input type="number">
		</div>
		<div class="input-box">
			<label>최대호가수량</label>
			<input type="number">
		</div>
		<div class="input-box">
			<label>총매도수량</label>
			<input type="number">
		</div>
		<div class="input-box">
			<label>최대주기</label>
			<input type="number">
		</div>
		<button class="mint" @click="test">실행</button>
		<button class="red">전체취소</button>
		<button class="orange" @click="exit">종료</button>
    </form>
	<div class="user-box">접속 아이디: <span>홍길동</span> 님</div>    
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const window: any;
const electron = window.require('electron');
const WebSocket = window.require('ws');
const { ipcRenderer } = electron;

@Component
export default class Home extends Vue {
	
	private created() {
		const ws = new WebSocket('wss://api.probit.com/api/exchange/v1/ws');
		ws.onopen = () => {
			const msg = {
			type: 'subscribe',
			channel: 'marketdata',
			interval: 500,
			market_id: 'BTC-USDT',
			filter: ['ticker', 'order_books_l0']
			};
			ws.send(JSON.stringify(msg));
		};
		
		ws.onmessage = (event: any) => {
			console.log(event.data);
		};
	}
	
	private exit(): void {
		ipcRenderer.send('exit');
	}
}
</script>
<style lang="scss" scoped>
.user-box {
	font-size: 12px;
    text-align: left;
    padding: 10px;

	& > span {
		font-weight: 900;
	}
}
table {
	width: 100%;
	border-radius: 1em;
    border-collapse: collapse;
    overflow: hidden;
}
thead {
	background-color: #13143f;
    color: white;
    font-size: 14px;
}

th {
	font-weight: 100;
	padding: 10px;
}

td {
	padding: 5px;
	font-size: 14px;
}
.mint-letter {
	color: #00c89c;
}
.red-letter {
	color: #ff2950;
}
.orange-letter {
	color: #ff9b00;
}
tr:nth-child(even) {
	background-color: #eee;
}
form {
	padding: 20px;
	box-sizing: border-box;
	border-top: 1px solid #ddd;
}

.input-box {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 15px;
	font-size: 14px;
	font-weight: 100;
}
input[type="number"] {
	border-radius: 10px;
    border: 1px solid #ddd;
    padding: 10px;
	outline: none;
}
button {
	border: none;
	color: white;
	border-radius: 5px;
    padding: 10px 15px;
	font-size: 14px
}
.mint {
	background-color: #00c89c;
}
.red {
	background-color: #ff2950;
	margin: 0px 10px;
}
.orange {
	background-color: #ff9b00;
}
</style>
