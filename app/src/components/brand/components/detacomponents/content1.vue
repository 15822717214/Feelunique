<template>
	<div class="content1">
		<div class="net">
			<img :src="olddata.image_url"/>
		</div>
		<div class="solit">
				<p class="price">{{olddata.merchant_currency}}{{olddata.price}}</p>
				<p class="can">参考价：
					<span>{{olddata.reference_currency}}{{olddata.reference_price}}</span>
				</p>
				<span class="lt" >{{olddata.name}}</span>
		</div>
		<div class="section">
			<p>活动</p>
			<div v-html="newdata.data"></div>
		</div>
		<div class="light">
			<p>色号:<span>{{st}}</span></p>
			<ul>
				<li v-for="(item,index) in bgcolor" @click="handleclick(index)"      :class="item"></li>
			</ul>
		</div>
		<div class="num">
			<span>数量</span>
			<ul>
				<li>-</li>
				<p>1</p>
				<li>+</li>
			</ul>
			<p>商品限购10件</p>
		</div>
		<div class="shui">
			<p><span>发货</span> 英国直邮，发货后预计7-14天到货</p>
			<p><span>税费</span> 如被税，可联系客服领取£20无门槛限时税费补贴券</p>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		data(){
			return{
				color:["light","Nude","4 Honey","5 Brightener","6 Neutraliser","03 Fair","08 Buff","10 Caramel","00 Ivory",
					"07 Sand","11 Toffee","13 Cocoa"
				],
				bgcolor:["ss1","ss2","ss3","ss4","ss5","ss6","ss7","ss8","ss9","ss10","ss11","ss12"],
				st:"light"
				
			}
		},
		computed:{
			...Vuex.mapState({
				newdata:(state)=>state.classify.newdata,
				olddata:(state)=>state.classify.olddata,
			})
		},
		methods:{
			handleclick(index){
				this.st=this.color[index]
			}
		}
	}
</script>

<style scoped lang="scss">
	.content1{
		width: 100%;
		height: 100%;
		padding:.88rem 0;
		.net{
			width: 100%;
			height: 6rem;
			border-bottom:.01rem solid #5A5A5A;
			img{
				width:100% ;
				height: 5.95rem;
			}
		}
		.solit{
			width: 100%;
			height: 2.24rem;
			border-bottom:.01rem solid #5A5A5A;
			padding: 0 .3rem;
			.price{
				width: 100%;
				height: .52rem;
				margin-top: .5rem;
				color: red;
				font-size: .4rem;
				font-weight: 900;
			}
			.can{
				width: 100%;
				height: .52rem;
				color: #969896;
			}
			.lt{
				display: block;
				height: .92rem;
				width: 100%;
				font-size: .30rem;
			}
		}
		.section{
			width: 100%;
			height: 3.36rem;
			display: flex;
			padding: .3rem;
			p{
				width: .87rem;
				height: 100%;
				color: #656B79;
				padding-top:.05rem ;
				
			}
			div{
				width:100% ;
				height:100% ;
				display: flex;
				flex-direction:column ;
				justify-content: space-around;
				color:#CC3333;
			}
		}
		.light{
			width: 100%;
			height: 3.2rem;
			padding: .4rem .2rem;
			p{
				width: 100%;
				font-size: .32rem;
				span{
					color: #00B7FF;
					font-size: .32rem;
				}
			}
			ul{
				width: 100%;
				height:90% ;
				display: flex;
				flex-wrap:wrap ;
				margin-top: .3rem;
				flex-shrink: inherit;
				li{
					width: .78rem;
					height: .78rem;
					margin:0 .1rem ;
				}
				.ss1{
					background:pink;
				}
				.ss2{
					background:#DB7093;
				}
				.ss3{
					background:#CC3333;
				}
				.ss4{
					background:#FF0000;
				}
				.ss5{
					background:#9A6E3A;
				}
				.ss6{
					background:#EE9900;
				}.ss7{
					background:#A71D5D;
				}
				.ss8{
					background:#795DA3;
				}
				.ss9{
					background:#9A6E3A;
				}
				.ss10{
					background:#CC3333;
				}
				.ss11{
					background:#BD2C00;
				}
				.ss12{
					background:#FF4500;
				}
			}
		}
		.num{
			width: 100%;
			height: 1.3rem;
			/*margin: .1rem;*/
			padding:.1rem ;
			border-top:.1rem solid #E8E8E8 ;
			border-bottom:.1rem solid #E8E8E8 ;
			display: flex;
			align-items: center;
			font-size: .26rem;
			ul{
				width: 1.6rem;
				height: 50%;
				align-items: center;
				margin: 0 .3rem;
				display: flex;
				li{
					width: 30%;
					height: 100%;
					border:.001rem solid #333 ;
					text-align: center;
				}
				p{
					width: 40%;
					height: 100%;
					text-align: center;
					border-top:.001rem solid #333 ;
					border-bottom:.001rem solid #333 ;
				}
			}
		}
		.shui{
			width: 100%;
			height: 1.84rem;
			border-bottom:.1rem solid #e8e8e8;
			border-bottom:.1rem solid #e8e8e8;
			p{
				width: 100%;
				height: 40%;
				font-size: .24rem;
				display: flex;
				align-items: center;
				span{
					color:#656B79;
					margin-right: .2rem;
				}
			}
		}
	}
</style>