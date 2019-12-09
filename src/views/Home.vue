<template>
  	<div class="window-box">
	  	<Titlebar />
	  	<div class="box-content vertical">
			<div class="msg-box" :style="{ 'background-color': bg }" v-show="show">{{ msg }}<span @click="show = false">x</span></div>
			<ul>
				<li>
					<button class="collapsible" @click="menu = 0" :class="{ active: menu === 0 }">1차 주기</button>
					<div :style="{ 'max-height': menu === 0 ? '315px': '0px' }" class="content">
						<div class="input-box mt15">
							<label>매도금액 Max</label>
							<input type="text" v-model="one.max">
						</div>
						<div class="input-box">
							<label>매도금액 Min</label>
							<input type="text" v-model="one.min">
						</div>
						<div class="input-box">
							<label>1회당 매도수량</label>
							<input type="text" v-model="one.quantity">
						</div>
						<div class="input-box">
							<!-- <label>총매도수량합계</label> -->
							<label>매수주기</label>
							<input type="text" v-model="one.buyTime">
						</div>
						<div class="input-box">
							<label>매도주기</label>
							<input type="text" v-model="one.sellTime">
						</div>
						<div class="input-box">
							<label>변동주기</label>
							<input type="text" placeholder="(단위: 초)" v-model="one.limitTime">
						</div>
					</div>
				</li>
				<li>
					<button class="collapsible" @click="menu = 1" :class="{ active: menu === 1 }">2차 주기</button>
					<div :style="{ 'max-height': menu === 1 ? '315px': '0px' }" class="content">
						<div class="input-box mt15">
							<label>매도금액 Max</label>
							<input type="text" v-model="two.max">
						</div>
						<div class="input-box">
							<label>매도금액 Min</label>
							<input type="text" v-model="two.min">
						</div>
						<div class="input-box">
							<label>1회당 매도수량</label>
							<input type="text" v-model="two.quantity">
						</div>
						<div class="input-box">
							<!-- <label>총매도수량합계</label> -->
							<label>매수주기</label>
							<input type="text" v-model="two.buyTime">
						</div>
						<div class="input-box">
							<label>매도주기</label>
							<input type="text" v-model="two.sellTime">
						</div>
						<div class="input-box">
							<label>변동주기</label>
							<input type="text" placeholder="(단위: 초)" v-model="two.limitTime"> 
						</div>
					</div>
				</li>
				<li>
					<button class="collapsible" @click="menu = 2" :class="{ active: menu === 2 }">3차 주기</button>
					<div :style="{ 'max-height': menu === 2 ? '315px': '0px' }" class="content">
						<div class="input-box mt15">
							<label>매도금액 Max</label>
							<input type="text" v-model="three.max">
						</div>
						<div class="input-box">
							<label>매도금액 Min</label>
							<input type="text" v-model="three.min">
						</div>
						<div class="input-box">
							<label>1회당 매도수량</label>
							<input type="text" v-model="three.quantity">
						</div>
						<div class="input-box">
							<!-- <label>총매도수량합계</label> -->
							<label>매수주기</label>
							<input type="text" v-model="three.buyTime">
						</div>
						<div class="input-box">
							<label>매도주기</label>
							<input type="text" v-model="three.sellTime">
						</div>
						<div class="input-box">
							<label>변동주기</label>
							<input type="text" placeholder="(단위: 초)" v-model="three.limitTime"> 
						</div>
					</div>
				</li>
				<li>
					<button class="collapsible" @click="menu = 3" :class="{ active: menu === 3 }">4차 주기</button>
					<div :style="{ 'max-height': menu === 3 ? '315px': '0px' }" class="content">
						<div class="input-box mt15">
							<label>매도금액 Max</label>
							<input type="text" v-model="four.max">
						</div>
						<div class="input-box">
							<label>매도금액 Min</label>
							<input type="text" v-model="four.min">
						</div>
						<div class="input-box">
							<label>1회당 매도수량</label>
							<input type="text" v-model="four.quantity">
						</div>
						<div class="input-box">
							<!-- <label>총매도수량합계</label> -->
							<label>매수주기</label>
							<input type="text" v-model="four.buyTime">
						</div>
						<div class="input-box">
							<label>매도주기</label>
							<input type="text" v-model="four.sellTime">
						</div>
						<div class="input-box">
							<label>변동주기</label>
							<input type="text" placeholder="(단위: 초)" v-model="four.limitTime"> 
						</div>
					</div>
				</li>
				<li>
					<button class="collapsible" @click="menu = 4" :class="{ active: menu === 4 }">5차 주기</button>
					<div :style="{ 'max-height': menu === 4 ? '315px': '0px' }" class="content">
						<div class="input-box mt15">
							<label>매도금액 Max</label>
							<input type="text" v-model="five.max">
						</div>
						<div class="input-box">
							<label>매도금액 Min</label>
							<input type="text" v-model="five.min">
						</div>
						<div class="input-box">
							<label>1회당 매도수량</label>
							<input type="text" v-model="five.quantity">
						</div>
						<div class="input-box">
							<!-- <label>총매도수량합계</label> -->
							<label>매수주기</label>
							<input type="text" v-model="five.buyTime">
						</div>
						<div class="input-box">
							<label>매도주기</label>
							<input type="text" v-model="five.sellTime">
						</div>
						<div class="input-box">
							<label>변동주기</label>
							<input type="text" placeholder="(단위: 초)" v-model="five.limitTime"> 
						</div>
					</div>
				</li>				
			</ul>
			<div class="btn-box">
				<button class="mint" :disabled="type === 'cancel'" @click="run">실행</button>
				<a href="#" class="red" @click="cancelOrder">전체취소</a>
				<button class="blue" @click="refresh">새로고침</button>
				<button class="orange" @click="exit">종료</button>
			</div>
			<div class="user-box"><span>접속 아이디: {{ id }} 님</span></div>
			<div class="money-box"><span>총 잔고: {{ total }}</span> <span>사용가능 잔고: {{ available }}</span></div>
    	</div>
  	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Titlebar from '@/components/Titlebar.vue';
import { State, Action } from 'vuex-class';
import { orderService } from './order.service';
import { userService } from './user.service';
import { user } from '@/env/user';
import { caculateLimitDate, makeRandom } from '@/shared/functions';

declare const window: any;
const electron = window.require('electron');
const WebSocket = window.require('ws');
const { ipcRenderer, remote } = electron;
const log = remote.require('electron-log');
const namespace: string = 'profile';
@Component({
	components: {
		Titlebar
	}
})
export default class Home extends Vue {
	@Action('login', { namespace }) private login!: any;

	private id: string | null = '';
	private order: any = {
		time: '',
		timeTwo: '',
		timeThree: '',
		timeFour: '',
		timeFive: ''
	};
	private limit: any = {
		one: '',
		two: '',
		three: '',
		four: '',
		five: ''
	};
	private g: any = '';
	private type: string = 'run';
	private ws: any = new WebSocket('wss://api.probit.com/api/exchange/v1/ws');
	private available: number = 0;
	private total: number = 0;
	private bg: string = '#00c89c';
	private show:boolean = false;
	private msg: string = '';
	private menu: number = 0;
	private one: any = {
		max: '',
		min: '',
		quantity: '',
		sellTime: '',
		buyTime: '',
		limitTime: ''
	};
	private two: any = {
		max: '',
		min: '',
		quantity: '',
		sellTime: '',
		buyTime: '',
		limitTime: ''
	};
	private three: any = {
		max: '',
		min: '',
		quantity: '',
		sellTime: '',
		buyTime: '',
		limitTime: ''
	};
	private four: any = {
		max: '',
		min: '',
		quantity: '',
		sellTime: '',
		buyTime: '',
		limitTime: ''
	};
	private five: any = {
		max: '',
		min: '',
		quantity: '',
		sellTime: '',
		buyTime: '',
		limitTime: ''
	};
	private count: number = 0;

	private mounted() {
		this.ws.onopen = () => {
			const msg = {
				type: 'authorization',
				token: localStorage.getItem('tken')
			};
			this.ws.send(JSON.stringify(msg));
		};

		this.ws.onmessage = (event: any) => {
			const data = JSON.parse(event.data);
			console.log('Message #########', data);
			if (data.errorCode === 'UNAUTHORIZED') {
				this.showAlert('인증이 승인되지 않습니다.', '#ff2950');
				const msg = {
					type: 'authorization',
					token: localStorage.getItem('tken')
				};
				this.ws.send(JSON.stringify(msg));
			}

			if (data.type === 'authorization' && data.result === 'ok') {
				const msg = {
					type: 'subscribe',
					channel: 'balance'
				};
				this.id = localStorage.getItem('id');
				this.login(this.id)
					.then(() => {
						this.showAlert('자동 로그인되었습니다.', '#00c89c');
					});
				this.ws.send(JSON.stringify(msg));
			} else if (data.channel === 'balance') {
				if (data.data.hasOwnProperty('CXAT') && data.data.hasOwnProperty('KRW') && data.data.hasOwnProperty('ETH')) {
					log.info(`[KRW-CXAT 총액 - 9090000 = ${ +data.data.KRW.total - 9090000 }]---------[ETH-CXAT 총액 - 290910000 = ${ +data.data.ETH.total - 290910000 }]---------[외부유입 CXAT 총액: ${ (+data.data.KRW.total - 9090000) + (+data.data.ETH.total - 290910000) }]`);
				}
				if (data.data.hasOwnProperty('KRW')) {
					this.available = data.data.KRW.available;
					this.total = data.data.KRW.total;
					log.info(`[KRW 총액: ${ data.data.KRW.total } KRW 사용가능 잔고: ${ data.data.KRW.available }]-----------[KRW-CXAT 총액 - 9090000 = ${ +data.data.KRW.total - 9090000 }]`);
				}
				if (data.data.hasOwnProperty('CXAT')) {
					log.info(`[CXAT 총액: ${ data.data.CXAT.total } CXAT 사용가능 잔고: ${ data.data.CXAT.available }]`);
				}
			}
		};

		this.ws.onerror = (error: any): void => {
			console.error(error);
		}
	}

	private showAlert(msg: string, color: string): void {
		this.msg = msg;
		this.bg = color;
		this.show = true;
	}

	private refresh(): void {
		location.reload();
		this.showAlert('새로고침되었습니다.', '#13143f');
	}

	private run() {
		// if (this.one.max === '' || this.one.min === '' || this.one.quantity === '' || this.one.sellTime === '' || this.one.buyTime === '' || this.one.limitTime || this.two.max === '' || this.two.min === '' || this.two.quantity === '' || this.two.sellTime === '' || this.two.buyTime === '' || this.two.limitTime === '') {
		// 	return alert('하나라도 입력란이 비어 있으면 안됩니다.');
		// }
		alert('입력한 값에 따라 실행됩니다.');
		this.g = this.generator();
		this.g.next();
		this.type = 'cancel';
	}

	private* generator() {
		this.showAlert('1차주기 시작합니다.', '#00c89c');
		this.runSetInterval('one', 'time');
		yield
		this.showAlert('2차주기 시작합니다.', '#00c89c');
		this.runSetInterval('two', 'timeTwo');
		yield
		this.showAlert('3차주기 시작합니다.', '#00c89c');
		this.runSetInterval('three', 'timeThree');
		yield
		this.showAlert('4차주기 시작합니다.', '#00c89c');
		this.runSetInterval('four', 'timeFour');
		yield
		this.showAlert('5차주기 시작합니다.', '#00c89c');
		this.runSetInterval('five', 'timeFive');
		yield
	}
	
	private runSetInterval(obj: any, setTime: string) {
		const that: { [index: string]: any } = this;
		this.limit[obj] = new Date().getTime() + (+that[obj].limitTime * 1000);
		this.order[setTime] = setInterval(() => {
			if (new Date().getTime() > this.limit[obj]) {
				this.count++;
				clearInterval(this.order[setTime]);
				this.g.next();
				if (this.count === 4) {
					alert('모든 주기가 끝났습니다.');
				}
			}
			const { min, max, quantity, sellTime, buyTime } = that[obj];
			this.sellAndBuy(+min, +max, +quantity, +sellTime, +buyTime);
		}, +that[obj].sellTime * 1000);
	}

	private sellAndBuy(min: number, max: number, quantity: number, sellTime: number, buyTime: number): void {
		const sell_max: any = sellTime * 1000;
		setTimeout(() => {
			this.sellOrder(min, max, quantity);
		}, makeRandom(1, sell_max));

		const buy_max: any = buyTime * 1000;
		setTimeout(() => {
			this.buyOrder(min, max);
		}, makeRandom(10000, buy_max));
	}

	async getOpenOrder(): Promise<any> {//모든 오픈오더 리스트 가져오기
		try {
			const response: any = await orderService.getOpenOrder('CXAT-KRW');
			console.log('openorder__________', response)
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}

	async sellOrder(min: number, max: number, quantity: number): Promise<any> {
		const randomNum: string = makeRandom(min, max);
		const randomQuantity: string = makeRandom(2000, quantity).split('.')[0];
		try {
			const response: any = await orderService.createNewOrder({ market_id: 'CXAT-KRW', type: 'limit', side: 'sell', time_in_force: 'gtc', limit_price: randomNum, quantity: randomQuantity, client_order_id: 'today' + new Date().getTime() });
			console.log('sellOrder ----->', response);
		} catch (error) {
			console.error(error);
			if (error.response.data.errorCode === 'UNAUTHORIZED') {
				this.showAlert('토큰이 만료되어 승인이 거부되었습니다. 로그인을 시도합니다.', '#ff2950');
				this.login(this.id)
					.then(() => {
						this.showAlert('자동 로그인되었습니다.', '#00c89c');
					});
			}
			if (error.response.data.errorCode.includes('INVALID_MARKET')) {
				this.showAlert('매수할 가격이 존재하지 않습니다.', '#ff2950');
			}
		}
	}

	async buyOrder(min: number, max: number): Promise<any> {
		try {
			const list: any = await this.getOpenOrder();
			let min = 0;
			let idx = 0;
			let buy = 0;
			let sell = 0;
			for (let i = 0; i < list.data.length; i++) {
				let price;
				if (list.data[i].side === 'buy') {
					buy++;
				} else {
					sell++;
					let price = +list.data[i].limit_price;
					if (price >= min && price < max) {
						min = price;
						idx = i;
					}
				}
			}

			if (sell >= buy) {
				if (list.data[idx].client_order_id.includes('today')) {console.log('buy!', list.data[idx].limit_price)
					const response: any = await orderService.createNewOrder({ market_id: 'CXAT-KRW', type: 'limit', side: 'buy', time_in_force: 'gtc', limit_price: list.data[idx].limit_price, quantity: list.data[idx].quantity });
					// if (Notification.permission === "granted") {
					// 	var notification = new Notification("KRW 매수 알림", {
					// 		body: `${ list.data[idx].client_order_id }의 ${ list.data[idx].limit_price }을 매수하였습니다.`
					// 	});
					// }
				}
			}
		} catch (error) {
			console.error(error);
			if (error.response.data.errorCode === 'NOT_ENOUGH_BALANCE') {
				this.showAlert('잔고가 부족합니다.', '#ff2950');
			}
		}
	}

	async cancelOrder(): Promise<any> {
		try {
			const openList: any = await this.getOpenOrder();
			for (let item of openList.data) {
				if (item.client_order_id.includes('today')) {
					const response: any = await orderService.cancelOrder({ market_id: 'CXAT-KRW', order_id: item.id });
				}
			}
			clearInterval(this.order.time);
			this.type = 'run';
			alert('전체취소되었습니다.');
		} catch (error) {
			console.error(error);
		}
	}
	
	private exit(): void {
		ipcRenderer.send('exit');
	}
}
</script>
<style lang="scss" scoped>
@import './home.scss';
</style>
