<template>
	<view>
		<u-navbar title="砸金蛋活动" :background="background" title-color="#000" :isBack="true"></u-navbar>
		
		<view class="flex align-center text-color" style="height: 80rpx;background-color: #fff;">
		
					<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
					<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-weight: 600;">基础设置</text>
				</view>
		
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
					<text>活动标题</text>
					<input style="text-align: end;" type="text" v-model="uploadData.activity_title" placeholder="不超过50字" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
		
				<!-- 开始时间 -->
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;"
				 @click="selectTime(1)">
					<text>开始时间</text>
					<view class="flex align-center justify-between">
						<text :style="startTime.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{startTime}}</text>
					</view>
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
		
				<!-- 结束时间 -->
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;"
				 @click="selectTime(2)">
					<text>结束时间</text>
					<view class="flex align-center justify-between">
						<text :style="endTime.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{endTime}}</text>
					</view>
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
		
				<view class="flex align-center justify-between bg-white pl-2 pr-2 mt-2" style="height: 120rpx;">
		
					<view class="flex flex-column">
						<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">砸蛋必填</text>
						<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;">打开后，砸蛋需获取顾客手机号码</text>
					</view>
		
					<view class="flex align-center justify-between">
						<text class="mr-2" style="font-family: PingFangSC-Regular, PingFang SC;color: #C3C3C3;font-size: 28upx;">手机号码</text>
						<u-switch v-model="open" active-color="#FF7200" inactive-color="#D8D8D8" @change="isNeedPhone"></u-switch>
					</view>
		
				</view>
				<divider :height="20"></divider>
				
				
				<!-- 抽奖设置 -->
				<view class="flex align-center text-color" style="height: 80rpx;background-color: #fff;">
				
							<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
							<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;
				color: #1D1200;font-weight: 600;">抽奖设置</text>
						</view>
				
					<view class="flex align-center justify-between bg-white pl-2 pr-2 " style="height: 120rpx;">
							
						<view class="flex flex-column">
							<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">每天砸蛋</text>
							<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;">单人每天可砸蛋次数</text>
						</view>
							
						<input style="text-align: end;" type="text" v-model="uploadData.daily_single_limit"  placeholder="请输入次数" placeholder-style="color: #9F9F9F;text-align: end;"/>
						</view>
							
					<view class="pl-2 pr-2">
						<divider :height="4"></divider>
					</view>
					
					<view class="flex align-center justify-between bg-white pl-2 pr-2 " style="height: 120rpx;">
							
						<view class="flex flex-column">
							<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">最多中奖</text>
							<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;">单人最多可中奖次数</text>
						</view>
							
						<input style="text-align: end;" type="text" v-model="uploadData.win_prize_times"  placeholder="请输入次数" placeholder-style="color: #9F9F9F;text-align: end;"/>
						</view>
							
					<view class="pl-2 pr-2">
						<divider :height="4"></divider>
					</view>
					
				<view class="flex align-center justify-between bg-white pl-2 pr-2 " style="height: 120rpx;">
						
					<view class="flex flex-column">
						<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">中奖概率</text>
						<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;">每次抽奖会中奖的概率，中奖率为5%，则输入5</text>
					</view>
					
					<view class="flex align-center">
						<input style="text-align: end;" type="text" v-model="uploadData.win_prize_probability"  placeholder="请输入概率" placeholder-style="color: #9F9F9F;text-align: end;"/>
						<text>%</text>
					</view>	
					
					</view>
						
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
					
				
				<view class="flex align-center justify-between bg-white pl-2 pr-2 mt-2" style="height: 120rpx;">
						
					<view class="flex flex-column">
						<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">做任务奖次数</text>
						<text  class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;width: 500rpx;">开启后，会提醒顾客联系你领取任务（如发朋友圈，加好友等），增加额外抽奖次数</text>
					</view>
						
					<view class="flex align-center justify-between">
						
						<u-switch v-model="open2" active-color="#FF7200" inactive-color="#D8D8D8" @change="isAddCount"></u-switch>
					</view>
						
				</view>
				
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
						
				<view class="flex align-center justify-between bg-white pl-2 pr-2 " style="height: 120rpx;">
						
					<view class="flex flex-column">
						<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">增加次数</text>
						<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;">输入几次，为客户增加几次次数</text>
					</view>
						
					<input style="text-align: end;" type="text" v-model="uploadData.task_increase_times"  placeholder="请输入次数" placeholder-style="color: #9F9F9F;text-align: end;"/>
					</view>
						
					<divider :height="20"></divider>	
						
			
			
			
			
			
			
			
			
			
			
			
			<!-- 奖品设置 一等奖-->
			<view class="flex align-center text-color" style="height: 80rpx;background-color: #fff;">
			
						<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
						<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;
			color: #1D1200;font-weight: 600;">奖品设置</text>
					</view>			
				
			<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
				<text>奖品一</text>
				<!-- <input style="text-align: end;" type="text" v-model="award1.prize_name" placeholder="输入奖品名称" placeholder-style="color: #9F9F9F;text-align: end;" /> -->
			</view>
			<view class="pl-2 pr-2">
				<divider :height="4"></divider>
			</view>	
			
			<view class="flex align-center justify-between text-color pl-2 " style="font-size: 28upx;height: 100rpx;">
				<text>券类型</text>
				<u-radio-group v-model="value1" width="160rpx" active-color="#FF7200" size="30">
					<u-radio @change="radioCatagor1()" v-for="(item, index) in list" :key="index" :name="item.name" :disabled="item.disabled"
					 style="align-items: flex-end;">
						{{item.name}}
					</u-radio>
				</u-radio-group>
			</view>
			<view class="pl-2 pr-2">
				<divider :height="4"></divider>
			</view>
			
			<!-- 折扣 -->
			<view v-if="value1=='折扣券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
				<text>折扣</text>
				<input style="text-align: end;" type="text" v-model="award1.prize_discount" placeholder="请输入折扣" placeholder-style="color: #9F9F9F;text-align: end;" />
			</view>
			<view v-if="value1=='折扣券'" class="pl-2 pr-2">
				<divider :height="4"></divider>
			</view>
			
			<!-- 奖品名称 -->
			<view v-if="value1=='兑换券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
				<text>奖品名称</text>
				<input style="text-align: end;" type="text" v-model="award1.prize_name" placeholder="奖品名称不超过20个字" placeholder-style="color: #9F9F9F;text-align: end;" />
			</view>
			<view v-if="value1=='兑换券'" class="pl-2 pr-2">
				<divider :height="4"></divider>
			</view>
			
			<!-- 优惠金额 -->
			<view v-if="value1=='代金券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
				<text>优惠金额</text>
				<input style="text-align: end;" type="text" v-model="award1.prize_coupon_price" placeholder="输入优惠金额" placeholder-style="color: #9F9F9F;text-align: end;" />
			</view>
			<divider v-if="value1=='代金券'" :height="4"></divider>
			
			<!-- 使用门槛 -->
			<view v-if="value1=='代金券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
				<view class="flex flex-column ">
					<text>使用门槛</text>
					<text style="font-size: 22upx;color: #aaa;">满多少元可用，0表示无门槛</text>
				</view>
				<input style="text-align: end;" type="text" v-model="award1.prize_use_threshold" placeholder="输入金额" placeholder-style="color: #9F9F9F;text-align: end;" />
			</view>
			<divider v-if="value1=='代金券'" :height="4"></divider>
			
			
			<!-- 奖品数量 -->
			<!-- <view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
				<text>券数量</text>
				<input style="text-align: end;" type="text" v-model="award1.prize_count" placeholder="请合理设置" placeholder-style="color: #9F9F9F;text-align: end;" />
			</view>
			<view class="pl-2 pr-2">
				<divider :height="4"></divider>
			</view> -->
			
			<!-- 券有效期 -->
			<view class="flex align-center justify-between text-color pl-2 " style="font-size: 28upx;height: 100rpx;">
				<text>券有效期</text>
				<u-radio-group v-model="value2" width="180rpx" active-color="#FF7200" size="30">
					<u-radio @change="radioTime1" v-for="(item, index) in list2" :key="index" :name="item.name" :disabled="item.disabled">
						{{item.name}}
					</u-radio>
				</u-radio-group>
			</view>
			<view class="pl-2 pr-2">
				<divider :height="4"></divider>
			</view>
			
			<!-- 开始时间 -->
			<view v-if="value2=='指定日期'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;"
			 @click="selectTime2(1)">
				<text>开始时间</text>
				<view class="flex align-center justify-between">
					<text :style="startTime2.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{startTime2}}</text>
					<uni-icon :size="20" color="#000" type="arrowright" />
				</view>
			</view>
			<view v-if="value2=='指定日期'" class="pl-2 pr-2">
				<divider :height="4"></divider>
			</view>
			
			
			<!-- 结束时间 -->
			<view v-if="value2=='指定日期'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;"
			 @click="selectTime2(2)">
				<text>结束时间</text>
				<view class="flex align-center justify-between">
					<text :style="endTime2.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{endTime2}}</text>
					<uni-icon :size="20" color="#000" type="arrowright" />
				</view>
			</view>
			<view v-if="value2=='指定日期'" class="pl-2 pr-2">
				<divider :height="4"></divider>
			</view>
			
			<!-- 有效天数 -->
			<view v-if="value2=='有效天数'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
				<text>领取后有效天数</text>
				<input style="text-align: end;" type="text" v-model="award1.prize_effective_days" placeholder="输入天数" placeholder-style="color: #9F9F9F;text-align: end;" />
			</view>
			<view v-if="value2=='有效天数'" class="pl-2 pr-2">
				<divider :height="4"></divider>
			</view>
			
			
			<!-- 适用范围 -->
			<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
				<text>适用范围</text>
				<input style="text-align: end;" type="text" v-model="award1.prize_effective_scope" placeholder="输入适用范围" placeholder-style="color: #9F9F9F;text-align: end;" />
			</view>
			
			<view class="pl-2 pr-2">
				<divider :height="4"></divider>
			</view>
			
			<!-- 奖品图片 -->
			<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
				<text>奖品图片</text>
				<text>不上传则显示默认图片</text>
			</view>
				
			<view class="pl-2 pr-2 flex align-center justify-between" style="height: 240rpx;">
				<view class=""></view>
				<view v-if="imageUrl1==''" class="flex align-center justify-center" style="height: 200rpx;width: 200rpx;background-color: #E9E9E9;" @click="chooseImage(1)">
					<view class="flex flex-column align-center">
						<text style="font-size: 120upx;color: #D8D8D8;margin-top: -30rpx;">+</text>
						<text style="margin-top: -20rpx;color: #7F7F7F;">0/1</text>
					</view>
					
				</view>
				
				<view v-if="imageUrl1" class="flex align-center justify-center" style="height: 200rpx;width: 200rpx;" @click="previewImage(1)">
					<image :src="imageUrl1" style="height: 200rpx;width: 200rpx;" mode="aspectFill"></image>
					
				</view>
				
				
			</view>	
			
			
			<view class="pl-2 pr-2">
				<divider :height="4"></divider>
			</view>
			
			<!-- 奖品数量 -->
			<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
				<text>奖品数量</text>
				<input style="text-align: end;" type="text" v-model="award1.prize_count" placeholder="奖品分数,越多中奖概率越大" placeholder-style="color: #9F9F9F;text-align: end;" />
			</view>
			
			<view class="pl-2 pr-2">
				<divider :height="4"></divider>
			</view>
			
			<view class="flex align-center justify-between bg-white pl-2 pr-2 " style="height: 120rpx;">
					
				<view class="flex flex-column">
					<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">每日上限</text>
					<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;">此奖项每天最多可抽中次数</text>
				</view>
					
				<input style="text-align: end;" type="text" v-model="award1.prize_daily_limit" placeholder="请输入次数,0为不中" placeholder-style="color: #9F9F9F;text-align: end;"/>
				</view>
					
			
			
			
			
			<!-- 奖品设置 二等奖-->
			
			<view class="" v-if="awardNum>1">
				
				<divider :height="20"></divider>
				
				<view class="flex align-center justify-between text-color" style="height: 80rpx;background-color: #fff;">
				            <view class="flex align-center">
								<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
											<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;
								color: #1D1200;font-weight: 600;">奖品设置</text>
							</view>
							
				
						</view>			
					
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
					<text>奖品二</text>
					<view class="rounded-circle flex align-center justify-center mr-2" style="background-color: #FF7200;" @click="removeItem(2)">
						<text class="text-center font-bold" style="width: 36rpx;height: 36rpx;color: #FFFFFF;">一</text>
					</view>
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>	
				
				<view class="flex align-center justify-between text-color pl-2 " style="font-size: 28upx;height: 100rpx;">
					<text>券类型</text>
					<u-radio-group v-model="value3" width="160rpx" active-color="#FF7200" size="30">
						<u-radio @change="radioCatagor2" v-for="(item, index) in list" :key="index" :name="item.name" :disabled="item.disabled"
						 style="align-items: flex-end;">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 折扣 -->
				<view v-if="value3=='折扣券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<text>折扣</text>
					<input style="text-align: end;" type="text" v-model="award2.prize_discount" placeholder="请输入折扣" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view v-if="value3=='折扣券'" class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 奖品名称 -->
				<view v-if="value3=='兑换券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<text>奖品名称</text>
					<input style="text-align: end;" type="text" v-model="award2.prize_name"  placeholder="奖品名称不超过20个字" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view v-if="value3=='兑换券'" class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 优惠金额 -->
				<view v-if="value3=='代金券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<text>优惠金额</text>
					<input style="text-align: end;" type="text" v-model="award2.prize_coupon_price" placeholder="输入优惠金额" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<divider v-if="value3=='代金券'" :height="4"></divider>
				
				<!-- 使用门槛 -->
				<view v-if="value3=='代金券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<view class="flex flex-column ">
						<text>使用门槛</text>
						<text style="font-size: 22upx;color: #aaa;">满多少元可用，0表示无门槛</text>
					</view>
					<input style="text-align: end;" type="text" v-model="award2.prize_use_threshold" placeholder="输入金额" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<divider v-if="value3=='代金券'" :height="4"></divider>
				
				
				<!-- 奖品数量 -->
			<!-- 	<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<text>券数量</text>
					<input style="text-align: end;" type="text" :value="shopName" placeholder="请合理设置" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view> -->
				
				<!-- 券有效期 -->
				<view class="flex align-center justify-between text-color pl-2 " style="font-size: 28upx;height: 100rpx;">
					<text>券有效期</text>
					<u-radio-group v-model="value4" width="180rpx" active-color="#FF7200" size="30">
						<u-radio @change="radioTime2" v-for="(item, index) in list2" :key="index" :name="item.name" :disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 开始时间 -->
				<view v-if="value4=='指定日期'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;"
				 @click="selectTime3(1)">
					<text>开始时间</text>
					<view class="flex align-center justify-between">
						<text :style="startTime3.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{startTime3}}</text>
						<uni-icon :size="20" color="#000" type="arrowright" />
					</view>
				</view>
				<view v-if="value4=='指定日期'" class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				
				<!-- 结束时间 -->
				<view v-if="value4=='指定日期'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;"
				 @click="selectTime3(2)">
					<text>结束时间</text>
					<view class="flex align-center justify-between">
						<text :style="endTime3.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{endTime3}}</text>
						<uni-icon :size="20" color="#000" type="arrowright" />
					</view>
				</view>
				<view v-if="value4=='指定日期'" class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 有效天数 -->
				<view v-if="value4=='有效天数'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<text>领取后有效天数</text>
					<input style="text-align: end;" type="text" v-model="award2.prize_effective_days" placeholder="输入天数" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view v-if="value4=='有效天数'" class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				
				<!-- 适用范围 -->
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<text>适用范围</text>
					<input style="text-align: end;" type="text" v-model="award2.prize_effective_scope" placeholder="输入适用范围" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 奖品图片 -->
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<text>奖品图片</text>
					<text>不上传则显示默认图片</text>
				</view>
					
				<view class="pl-2 pr-2 flex align-center justify-between" style="height: 240rpx;">
					<view class=""></view>
					<view v-if="imageUrl2==''" class="flex align-center justify-center" style="height: 200rpx;width: 200rpx;background-color: #E9E9E9;" @click="chooseImage2(1)">
						<view class="flex flex-column align-center">
							<text style="font-size: 120upx;color: #D8D8D8;margin-top: -30rpx;">+</text>
							<text style="margin-top: -20rpx;color: #7F7F7F;">0/1</text>
						</view>
						
					</view>
					
					<view v-if="imageUrl2" class="flex align-center justify-center" style="height: 200rpx;width: 200rpx;" @click="previewImage(2)">
						<image :src="imageUrl2" style="height: 200rpx;width: 200rpx;" mode="aspectFill"></image>
						
					</view>
					
					
				</view>	
				
				
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 奖品数量 -->
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<text>奖品数量</text>
					<input style="text-align: end;" type="text" v-model="award2.prize_count" placeholder="奖品分数,越多中奖概率越大" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<view class="flex align-center justify-between bg-white pl-2 pr-2 " style="height: 120rpx;">
						
					<view class="flex flex-column">
						<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">每日上限</text>
						<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;">此奖项每天最多可抽中次数</text>
					</view>
						
					<input style="text-align: end;" type="text" v-model="award2.prize_daily_limit"  placeholder="请输入次数,0为不中" placeholder-style="color: #9F9F9F;text-align: end;"/>
					</view>
			</view>
			
			
			
			
			<view class="" v-if="awardNum>2">
				<divider :height="20"></divider>
				<!-- 奖品设置 三等奖-->
				<view class="flex align-center justify-between text-color" style="height: 80rpx;background-color: #fff;">
				            <view class="flex align-center">
								<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
											<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;
								color: #1D1200;font-weight: 600;">奖品设置</text>
							</view>
							

				
						</view>			
					
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
					<text>奖品三</text>
					<view class="rounded-circle flex align-center justify-center mr-2" style="background-color: #FF7200;" @click="removeItem(3)">
						<text class="text-center font-bold" style="width: 36rpx;height: 36rpx;color: #FFFFFF;">一</text>
					</view>
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>	
				
				<view class="flex align-center justify-between text-color pl-2 " style="font-size: 28upx;height: 100rpx;">
					<text>券类型</text>
					<u-radio-group v-model="value5" width="160rpx" active-color="#FF7200" size="30">
						<u-radio @change="radioCatagor3" v-for="(item, index) in list" :key="index" :name="item.name" :disabled="item.disabled"
						 style="align-items: flex-end;">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 折扣 -->
				<view v-if="value5=='折扣券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<text>折扣</text>
					<input style="text-align: end;" type="text" v-model="award3.prize_discount" placeholder="请输入折扣" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view v-if="value5=='折扣券'" class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 奖品名称 -->
				<view v-if="value5=='兑换券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<text>奖品名称</text>
					<input style="text-align: end;" type="text"  v-model="award3.prize_name" placeholder="奖品名称不超过20个字" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view v-if="value5=='兑换券'" class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 优惠金额 -->
				<view v-if="value5=='代金券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<text>优惠金额</text>
					<input style="text-align: end;" type="text"  v-model="award3.prize_coupon_price" placeholder="输入优惠金额" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<divider v-if="value5=='代金券'" :height="4"></divider>
				
				<!-- 使用门槛 -->
				<view v-if="value5=='代金券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<view class="flex flex-column ">
						<text>使用门槛</text>
						<text style="font-size: 22upx;color: #aaa;">满多少元可用，0表示无门槛</text>
					</view>
					<input style="text-align: end;" type="text" v-model="award3.prize_use_threshold" placeholder="输入金额" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<divider v-if="value5=='代金券'" :height="4"></divider>
				
				
				<!-- 奖品数量 -->
			<!-- 	<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<text>券数量</text>
					<input style="text-align: end;" type="text" :value="shopName" placeholder="请合理设置" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view> -->
				
				<!-- 券有效期 -->
				<view class="flex align-center justify-between text-color pl-2 " style="font-size: 28upx;height: 100rpx;">
					<text>券有效期</text>
					<u-radio-group v-model="value6" width="180rpx" active-color="#FF7200" size="30">
						<u-radio @change="radioTime3" v-for="(item, index) in list2" :key="index" :name="item.name" :disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 开始时间 -->
				<view v-if="value6=='指定日期'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;"
				 @click="selectTime4(1)">
					<text>开始时间</text>
					<view class="flex align-center justify-between">
						<text :style="startTime4.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{startTime4}}</text>
						<uni-icon :size="20" color="#000" type="arrowright" />
					</view>
				</view>
				<view v-if="value6=='指定日期'" class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				
				<!-- 结束时间 -->
				<view v-if="value6=='指定日期'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;"
				 @click="selectTime4(2)">
					<text>结束时间</text>
					<view class="flex align-center justify-between">
						<text :style="endTime4.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{endTime4}}</text>
						<uni-icon :size="20" color="#000" type="arrowright" />
					</view>
				</view>
				<view v-if="value6=='指定日期'" class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 有效天数 -->
				<view v-if="value6=='有效天数'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<text>领取后有效天数</text>
					<input style="text-align: end;" type="text" v-model="award3.prize_effective_days" placeholder="输入天数" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view v-if="value6=='有效天数'" class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				
				<!-- 适用范围 -->
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<text>适用范围</text>
					<input style="text-align: end;" type="text" v-model="award3.prize_effective_scope" placeholder="输入适用范围" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 奖品图片 -->
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<text>奖品图片</text>
					<text>不上传则显示默认图片</text>
				</view>
					
				<view class="pl-2 pr-2 flex align-center justify-between" style="height: 240rpx;">
					<view class=""></view>
					<view v-if="imageUrl3==''" class="flex align-center justify-center" style="height: 200rpx;width: 200rpx;background-color: #E9E9E9;" @click="chooseImage3(3)">
						<view class="flex flex-column align-center">
							<text style="font-size: 120upx;color: #D8D8D8;margin-top: -30rpx;">+</text>
							<text style="margin-top: -20rpx;color: #7F7F7F;">0/1</text>
						</view>
						
					</view>
					
					<view v-if="imageUrl3" class="flex align-center justify-center" style="height: 200rpx;width: 200rpx;" @click="previewImage(3)">
						<image :src="imageUrl3" style="height: 200rpx;width: 200rpx;" mode="aspectFill"></image>
						
					</view>
					
					
				</view>	
				
				
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 奖品数量 -->
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<text>奖品数量</text>
					<input style="text-align: end;" type="text" v-model="award3.prize_count" placeholder="奖品分数,越多中奖概率越大" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<view class="flex align-center justify-between bg-white pl-2 pr-2 " style="height: 120rpx;">
						
					<view class="flex flex-column">
						<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">每日上限</text>
						<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;">此奖项每天最多可抽中次数</text>
					</view>
						
					<input style="text-align: end;" type="text" v-model="award3.prize_daily_limit" placeholder="请输入次数,0为不中" placeholder-style="color: #9F9F9F;text-align: end;"/>
					</view>
			</view>
			
			
			
			
			<view class="" v-if="awardNum>3">
				<divider :height="20"></divider>
				<!-- 奖品设置 四等奖-->
				<view class="flex align-center justify-between text-color" style="height: 80rpx;background-color: #fff;">
				            <view class="flex align-center">
								<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
											<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;font-weight: 500;
								color: #1D1200;font-weight: 600;">奖品设置</text>
							</view>
							
							
				            
				
						</view>			
					
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;">
					<text>奖品四</text>
					<view class="rounded-circle flex align-center justify-center mr-2" style="background-color: #FF7200;" @click="removeItem(4)">
						<text class="text-center font-bold" style="width: 36rpx;height: 36rpx;color: #FFFFFF;">一</text>
					</view>
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>	
				
				<view class="flex align-center justify-between text-color pl-2 " style="font-size: 28upx;height: 100rpx;">
					<text>券类型</text>
					<u-radio-group v-model="value7" width="160rpx" active-color="#FF7200" size="30">
						<u-radio @change="radioCatagor4" v-for="(item, index) in list" :key="index" :name="item.name" :disabled="item.disabled"
						 style="align-items: flex-end;">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 折扣 -->
				<view v-if="value7=='折扣券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<text>折扣</text>
					<input style="text-align: end;" type="text" v-model="award4.prize_discount" placeholder="请输入折扣" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view v-if="value7=='折扣券'" class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 奖品名称 -->
				<view v-if="value7=='兑换券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<text>奖品名称</text>
					<input style="text-align: end;" type="text" v-model="award4.prize_name" placeholder="奖品名称不超过20个字" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view v-if="value7=='兑换券'" class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 优惠金额 -->
				<view v-if="value7=='代金券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<text>优惠金额</text>
					<input style="text-align: end;" type="text" v-model="award4.prize_coupon_price" placeholder="输入优惠金额" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<divider v-if="value7=='代金券'" :height="4"></divider>
				
				<!-- 使用门槛 -->
				<view v-if="value7=='代金券'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<view class="flex flex-column ">
						<text>使用门槛</text>
						<text style="font-size: 22upx;color: #aaa;">满多少元可用，0表示无门槛</text>
					</view>
					<input style="text-align: end;" type="text" v-model="award4.prize_use_threshold" placeholder="输入金额" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<divider v-if="value7=='代金券'" :height="4"></divider>
				
				
				<!-- 奖品数量 -->
				<!-- <view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<text>券数量</text>
					<input style="text-align: end;" type="text" :value="shopName" placeholder="请合理设置" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view> -->
				
				<!-- 券有效期 -->
				<view class="flex align-center justify-between text-color pl-2 " style="font-size: 28upx;height: 100rpx;">
					<text>券有效期</text>
					<u-radio-group v-model="value8" width="180rpx" active-color="#FF7200" size="30">
						<u-radio @change="radioTime4" v-for="(item, index) in list2" :key="index" :name="item.name" :disabled="item.disabled">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 开始时间 -->
				<view v-if="value8=='指定日期'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;"
				 @click="selectTime5(1)">
					<text>开始时间</text>
					<view class="flex align-center justify-between">
						<text :style="startTime5.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{startTime5}}</text>
						<uni-icon :size="20" color="#000" type="arrowright" />
					</view>
				</view>
				<view v-if="value8=='指定日期'" class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				
				<!-- 结束时间 -->
				<view v-if="value8=='指定日期'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;"
				 @click="selectTime5(2)">
					<text>结束时间</text>
					<view class="flex align-center justify-between">
						<text :style="endTime5.indexOf('选择')?'color:#1D1200':'color:#9F9F9F'">{{endTime5}}</text>
						<uni-icon :size="20" color="#000" type="arrowright" />
					</view>
				</view>
				<view v-if="value8=='指定日期'" class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 有效天数 -->
				<view v-if="value8=='有效天数'" class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<text>领取后有效天数</text>
					<input style="text-align: end;" type="text" v-model="award4.prize_effective_days" placeholder="输入天数" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				<view v-if="value8=='有效天数'" class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				
				<!-- 适用范围 -->
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<text>适用范围</text>
					<input style="text-align: end;" type="text" v-model="award4.prize_effective_scope" placeholder="输入适用范围" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 奖品图片 -->
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<text>奖品图片</text>
					<text>不上传则显示默认图片</text>
				</view>
					
				<view class="pl-2 pr-2 flex align-center justify-between" style="height: 240rpx;">
					<view class=""></view>
					<view v-if="imageUrl4==''" class="flex align-center justify-center" style="height: 200rpx;width: 200rpx;background-color: #E9E9E9;" @click="chooseImage4(3)">
						<view class="flex flex-column align-center">
							<text style="font-size: 120upx;color: #D8D8D8;margin-top: -30rpx;">+</text>
							<text style="margin-top: -20rpx;color: #7F7F7F;">0/1</text>
						</view>
						
					</view>
					
					<view v-if="imageUrl4" class="flex align-center justify-center" style="height: 200rpx;width: 200rpx;" @click="previewImage(4)">
						<image :src="imageUrl4" style="height: 200rpx;width: 200rpx;" mode="aspectFill"></image>
						
					</view>
					
					
				</view>	
				
				
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<!-- 奖品数量 -->
				<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;">
					<text>奖品数量</text>
					<input style="text-align: end;" type="text" v-model="award4.prize_count" placeholder="奖品分数,越多中奖概率越大" placeholder-style="color: #9F9F9F;text-align: end;" />
				</view>
				
				<view class="pl-2 pr-2">
					<divider :height="4"></divider>
				</view>
				
				<view class="flex align-center justify-between bg-white pl-2 pr-2 " style="height: 120rpx;">
						
					<view class="flex flex-column">
						<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">每日上限</text>
						<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;">此奖项每天最多可抽中次数</text>
					</view>
						
					<input style="text-align: end;" type="text" v-model="award4.prize_daily_limit"  placeholder="请输入次数,0为不中" placeholder-style="color: #9F9F9F;text-align: end;"/>
					</view>
			</view>
			
			
			<view class=" flex align-center justify-center flex-column" style="height: 200rpx;background-color: #F4F4F4;">
				
				<view class="flex align-center justify-center" style="width: 210rpx;height: 72rpx;border-radius: 36rpx;border: 1rpx solid #1D1200;" @click="addAward()">
					<text style="font-family: PingFangSC-Regular, PingFang SC;color: #1D1200;font-size: 28upx;">＋添加奖项</text>
				</view>
				
				<view class="mt-2">
					<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #8A8A8A;font-size: 24upx;">奖项数至少1个，最多4个</text>
				</view>
				
			</view>
			
			
			
			
			
			<view class="flex align-center text-color" style="height: 80rpx;background-color: #fff;">
			
				<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
				<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-weight: 600;">活动描述</text>
			</view>
			
			<view class="ml-2 mr-2 pl-1 " style="height: 280rpx;border-radius: 2px;border: 1px solid #C3C3C3;">
				<view class="flex  justify-between flex-column pt-1" style="height: 100%;">
					<textarea placeholder="请输入活动描述，不超过1000个字…" placeholder-style="color:#C3C3C3" style="width: 95%;height: 270rpx;"
					 class="p-1" v-model="uploadData.activity_desc" :maxlength="-1" />
			
					<view class=" flex flex-column justify-between  pr-2 align-end">
						           			<view class=""></view>
						           			<view class="" style="color: #8A8A8A;font-size: 24upx;margin-bottom: 10rpx;">
						           				<text>{{uploadData.activity_desc.length}}/1000</text>
						           			</view>
						           		</view>
						           		
						           	</view>
						           
						           	
						           </view>
						 		  
						   
						           <view class="pl-2 pr-2 flex align-center justify-between" style="font-family: PingFangSC-Regular, PingFang SC;color: #1D1200;height: 100rpx;">
						 			  <text>活动图片（活动详细介绍图片，最多上传9张）</text>
						 			  <view class="flex align-center justify-center " style="background-color: #FF7200;width: 120rpx;height: 50rpx;border-radius: 30rpx;" @click="chooseImageAct()">
						 			  	<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #FFF;font-size: 28upx;">选择</text>
						 			  </view>
						 		  </view>
						 		  
						 		  <view class="flex align-center ml-2  mr-2" style="flex-wrap: wrap;">
						 			  <view class="flex align-center  justify-center mt-1" style="height: 200rpx;width: 33.3%;"
						 			  v-for="(item,index) in imageUrlList" :key="index" >
						 			  			<view class="align-center flex flex-column " @click="previewImageAct(item)">
						 			  				<image :src="item" style="height: 200rpx;width: 200rpx;" mode="aspectFill"></image>
						 			  			</view>
						 			  
						 			  </view>
						 		  </view>
						 		
						 		  <view class="" style="height: 20rpx;"></view>
						 
						 
						           <divider :height="30"></divider>
						 		  
						 		  <view class="flex align-center text-color" style="height: 80rpx;background-color: #fff;">
						 		  
						 		  	<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
						 		  	<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-weight: 600;">活动规则</text>
						 		  </view>
						 		  
						 		   <view class="ml-2 mr-2 pl-1 " style="height: 500rpx;border-radius: 2px;border: 1px solid #C3C3C3;">
						 		   	<view class="flex  justify-between flex-column pt-1" style="height: 100%;">
						 		   		<textarea  placeholder="请输入活动规则，不超过2000个字…" placeholder-style="color:#C3C3C3"  style="width: 95%;height: 490rpx;" class="p-1"  v-model="uploadData.activity_rule" :maxlength="-1" />
						 		   		
						 		   		<view class=" flex flex-column justify-between  pr-2 align-end">
						 		   			<view class=""></view>
						 		   			<view class="" style="color: #8A8A8A;font-size: 24upx;margin-bottom: 10rpx;">
						 		   				<text>{{uploadData.activity_rule.length}}/2000</text>
						 		   			</view>
						 		   		</view>
						 		   		
						 		   	</view>
						 		   
						 		   	
						 		   </view>
						 		   <view class="" style="height: 20rpx;"></view>
						 		  
						            <divider :height="30"></divider>
						 		   
						 		   <view class="flex align-center text-color" style="height: 80rpx;background-color: #fff;">
						 		   
						 		   	<view class="main-bg-color" style="width: 8rpx;height: 42rpx;"></view>
						 		   	<text class="ml-2" style="font-size: 32rpx;font-family: PingFangSC-Medium, PingFang SC;color: #1D1200;font-weight: 600;">其他设置</text>
						 		   </view>
						 <view class="flex align-center justify-between bg-white pl-2 pr-2 mt-2" style="height: 120rpx;">
						 
						 			<view class="flex flex-column">
						 				<text style="font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #1D1200;font-size: 28upx;">智能防刷</text>
						 				<text class="mt-1" style="font-family: PingFangSC-Regular, PingFang SC;color: #8A8A8A;font-size: 20upx;width: 500rpx;">打开后，仅限距离店铺15公里内的客户可参与，请谨慎使用</text>
						 			</view>
						 
						 			<u-switch v-model="open3" active-color="#FF7200" inactive-color="#D8D8D8" @change="isFangShua"></u-switch>
						 
						 		</view>
						 		
						 		<view class="pl-2 pr-2">
						 			<divider :height="4"></divider>
						 		</view>
						 		
						 		<view class="flex align-center justify-between text-color pl-2 pr-2" style="font-size: 28upx;height: 100rpx;" @click="selectTime(1)">
						 			<text >背景音乐</text>
						 			<view class="flex align-center justify-between">
						 				<text>{{musicName}}</text>
						 				<uni-icon  :size="20" color="#000" type="arrowright" />
						 			</view>
						 		</view>
						 		
						 		<view class="flex align-center justify-center flex-column" style="height: 200rpx;background-color: #F5F5F5;">
						 			<view class="flex align-center justify-center">
						 				<text style="font-size: 24rpx;font-weight: 400;color: #8A8A8A;">创建活动即表示你已同意</text>
						 				<text style="font-size: 24rpx;font-weight: 400;color: #1D1200;">《活动发布协议》</text>
						 			</view>
						 			
						 			<view class="main-bg-color flex align-center justify-center mt-3" style="font-size: 36rpx;color: #fff; height: 75rpx; width: 86%; border-radius: 8rpx;" @click="confirmFabu()">
						 				 创建活动 		 
						 			</view>
						 			
						 		</view>
		<!-- 时间选择器 -->
		<u-picker mode="time" v-model="showTime" :params="params" @confirm="chooseTime()"></u-picker>
		<u-picker mode="time" v-model="showTime2" :params="params" @confirm="chooseTime2()"></u-picker>
		<u-picker mode="time" v-model="showTime3" :params="params" @confirm="chooseTime3()"></u-picker>
		<u-picker mode="time" v-model="showTime4" :params="params" @confirm="chooseTime4()"></u-picker>
		<u-picker mode="time" v-model="showTime5" :params="params" @confirm="chooseTime5()"></u-picker>
	</view>
</template>

<script>
	import divider from '@/components/divider.vue';
	
	//引入网络请求
	import $H from '@/common/request.js';
	import $C from '@/common/config.js';
	import $U from '@/common/util.js';
	
	export default {
		components: {
			divider
		},
		data() {
			return {
				background: {
					backgroundColor: '#fff',
				},
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: true,
					province: true,
					city: true,
					area: true,
					timestamp: false, // 1.3.7版本提供
				},
				awardNum:1,
				index: -1,
				musicName:"无",
				startTime: "选择开始时间",
				endTime: "选择结束时间",
				startTime2: "选择开始时间",
				endTime2: "选择结束时间",
				startTime3: "选择开始时间",
				endTime3: "选择结束时间",
				startTime4: "选择开始时间",
				endTime4: "选择结束时间",
				startTime5: "选择开始时间",
				endTime5: "选择结束时间",
				showTime: false,
				showTime2: false,
				showTime3: false,
				showTime4: false,
				showTime5: false,
				open: false,
				open2: false,
				open3: false,
				activityDetail:"",
				activityRule:"",
				imageUrl1:"",
				imageUrl2:"",
				imageUrl3:"",
				imageUrl4:"",
				imageUrlList:[],
				imageList:[],
				imageList2:[],
				imageList3:[],
				imageList4:[],
				imgurls:[],
				value1: '代金券',
				value2: '指定日期',
				value3: '代金券',
				value4: '指定日期',
				value5: '代金券',
				value6: '指定日期',
				value7: '代金券',
				value8: '指定日期',
				
				awardName1:"一等奖",
				awardName2:"二等奖",
				awardName3:"三等奖",
				awardName4:"四等奖",
				duihuanAwardName1:"",
				duihuanAwardName2:"",
				duihuanAwardName3:"",
				duihuanAwardName4:"",
				
				
				list: [{
						name: '代金券',
						disabled: false
					},
					{
						name: '折扣券',
						disabled: false
					},
					{
						name: '兑换券',
						disabled: false
					},
				],
				list2: [{
						name: '指定日期',
						disabled: false
					},
					{
						name: '有效天数',
						disabled: false
					},
				],
				
				uploadData:{
					        activity_desc: "", //string | 活动描述
					        activity_end_time: "", //datetime | 活动结束时间
					        activity_rule: "", //string | 活动规则
					        activity_start_time: "", //datetime | 活动开始时间
					        activity_title: "", //string | 活动标题
					        address: "", //string | 店铺地址
					        background_music_id: "", //long | 背景音乐id
					        background_music_url: "", //string | 背景音乐
					 
					        click_farming_flag: false, //boolean | 是否防止刷单
					       
					        cover_image: "", //string | 封面图片
					       
					        daily_single_limit: "", //int | 每天砸蛋次数
					        egg_frenzy: "", //string | 活动图片
					        egg_frenzy_count: "", //int | 抽奖次数
					       
					      
					      
					        mobile_flag: "", //boolean | 手机号是否必填
					        prizes: [],
					        task_flag: "", //boolean | 做任务是否奖励砸蛋次数
					        task_increase_times: "", //int | 做任务增加次数
					        today_consumed_prize_count: "", //int | 今日已发奖品数量
					        today_egg_frenzy_count: "", //int | 今日抽奖次数
					        today_view_count: "", //int | 今日浏览量
					        view_count: "", //int | 浏览量
					        win_prize_probability: "", //int | 中奖概率
					        win_prize_times: "" //int | 最多中奖次数
				},
				
				award1:
					{ //奖品列表
					 
					    prize_count: "", //int | 奖品数量
					    prize_coupon_price: "", //long | 代金券金额
					    prize_daily_consumed_count: "", //int | 奖品今天消耗数量
					    prize_daily_limit: "", //int | 奖品每日上限
					    prize_discount: "", //long | 折扣券折扣
					    prize_effective_days: "", //int | 奖品有效天数
					    prize_effective_end_time: "", //datetime | 奖品有效期结束时间
					    prize_effective_scope: "", //string | 奖品适用范围
					    prize_effective_start_time: "", //datetime | 奖品有效期开始时间
					    prize_effective_type: 1, //int | 奖品有效类型1指定日期 2有效天数
					    prize_name: "", //string | 奖品名称
					    prize_type: 1, //int | 奖品类型 1代金券 2折扣券 3兑换券
					    prize_url: "", //string | 奖品图片url
					    prize_use_threshold: "", //long | 代金券门槛金额
					    use_threshold_flag: false //boolean | 是否有门槛
					},
					
					award2:
						{ //奖品列表
						   prize_count: "", //int | 奖品数量
						   prize_coupon_price: "", //long | 代金券金额
						   prize_daily_consumed_count: "", //int | 奖品今天消耗数量
						   prize_daily_limit: "", //int | 奖品每日上限
						   prize_discount: "", //long | 折扣券折扣
						   prize_effective_days: "", //int | 奖品有效天数
						   prize_effective_end_time: "", //datetime | 奖品有效期结束时间
						   prize_effective_scope: "", //string | 奖品适用范围
						   prize_effective_start_time: "", //datetime | 奖品有效期开始时间
						   prize_effective_type: 1, //int | 奖品有效类型1指定日期 2有效天数
						   prize_name: "", //string | 奖品名称
						   prize_type: 1, //int | 奖品类型 1代金券 2折扣券 3兑换券
						   prize_url: "", //string | 奖品图片url
						   prize_use_threshold: "", //long | 代金券门槛金额
						   use_threshold_flag: false //boolean | 是否有门槛
						},
						award3:
							{ //奖品列表
							   prize_count: "", //int | 奖品数量
							   prize_coupon_price: "", //long | 代金券金额
							   prize_daily_consumed_count: "", //int | 奖品今天消耗数量
							   prize_daily_limit: "", //int | 奖品每日上限
							   prize_discount: "", //long | 折扣券折扣
							   prize_effective_days: "", //int | 奖品有效天数
							   prize_effective_end_time: "", //datetime | 奖品有效期结束时间
							   prize_effective_scope: "", //string | 奖品适用范围
							   prize_effective_start_time: "", //datetime | 奖品有效期开始时间
							   prize_effective_type: 1, //int | 奖品有效类型1指定日期 2有效天数
							   prize_name: "", //string | 奖品名称
							   prize_type: 1, //int | 奖品类型 1代金券 2折扣券 3兑换券
							   prize_url: "", //string | 奖品图片url
							   prize_use_threshold: "", //long | 代金券门槛金额
							   use_threshold_flag: false //boolean | 是否有门槛
							},
							award4:
								{ //奖品列表
								   prize_count: "", //int | 奖品数量
								   prize_coupon_price: "", //long | 代金券金额
								   prize_daily_consumed_count: "", //int | 奖品今天消耗数量
								   prize_daily_limit: "", //int | 奖品每日上限
								   prize_discount: "", //long | 折扣券折扣
								   prize_effective_days: "", //int | 奖品有效天数
								   prize_effective_end_time: "", //datetime | 奖品有效期结束时间
								   prize_effective_scope: "", //string | 奖品适用范围
								   prize_effective_start_time: "", //datetime | 奖品有效期开始时间
								   prize_effective_type: 1, //int | 奖品有效类型1指定日期 2有效天数
								   prize_name: "", //string | 奖品名称
								   prize_type: 1, //int | 奖品类型 1代金券 2折扣券 3兑换券
								   prize_url: "", //string | 奖品图片url
								   prize_use_threshold: "", //long | 代金券门槛金额
								   use_threshold_flag: false //boolean | 是否有门槛
								}
				
				
				
			}
		},
		
		methods: {
			addAward(){
				console.log(this.award1.use_threshold_flag)
				
				if(this.awardNum<4){
					this.awardNum++
				}
				else{
					uni.showToast({
						icon:'none',
						title:"最多添加4个奖品"
					})
				}
			},
			
			removeItem(index){
				if(this.awardNum!=1){
					this.awardNum--
				}
			},
			
			
			// 一等奖优惠券类型
			radioCatagor1(e){
				console.log(e)
				if(e=="代金券"){
					this.award1.prize_type=1
				}
				else if(e=="折扣券"){
					this.award1.prize_type=2
				}
				else if(e=="兑换券"){
					this.award1.prize_type=3
				}
			},
			
			// 二等奖优惠券类型
			radioCatagor2(e){
				console.log(e)
				if(e=="代金券"){
					this.award2.prize_type=1
				}
				else if(e=="折扣券"){
					this.award2.prize_type=2
				}
				else if(e=="兑换券"){
					this.award2.prize_type=3
				}
			},
			
			// 三等奖优惠券类型
			radioCatagor3(e){
				console.log(e)
				if(e=="代金券"){
					this.award3.prize_type=1
				}
				else if(e=="折扣券"){
					this.award3.prize_type=2
				}
				else if(e=="兑换券"){
					this.award3.prize_type=3
				}
			},
			
			// 四等奖优惠券类型
			radioCatagor4(e){
				console.log(e)
				if(e=="代金券"){
					this.award4.prize_type=1
				}
				else if(e=="折扣券"){
					this.award4.prize_type=2
				}
				else if(e=="兑换券"){
					this.award4.prize_type=3
				}
			},
			
			//一等奖时间设置
			radioTime1(e){
				console.log(e)
				if(e=="指定日期"){
					this.award1.prize_effective_type=1
				}
				else if(e=="有效天数"){
					this.award1.prize_effective_type=2
				}
				
			},
			
			//二等奖时间设置
			radioTime2(e){
				console.log(e)
				if(e=="指定日期"){
					this.award2.prize_effective_type=1
					
				}
				else if(e=="有效天数"){
					this.award2.prize_effective_type=2
				}
				
			},
			
			//三等奖时间设置
			radioTime3(e){
				console.log(e)
				if(e=="指定日期"){
					this.award3.prize_effective_type=1
					
				}
				else if(e=="有效天数"){
					this.award3.prize_effective_type=2
				}
				
			},
			
			//四等奖时间设置
			radioTime4(e){
				console.log(e)
				if(e=="指定日期"){
					this.award4.prize_effective_type=1
					
				}
				else if(e=="有效天数"){
					this.award4.prize_effective_type=2
				}
				
			},
			
			
			// 开启防刷
			isFangShua(e){
				if(e){
					this.uploadData.click_farming_flag=true
				}
				else{
					this.uploadData.click_farming_flag=false
				}
			},
			
			isNeedPhone(e){
				if(e){
					this.uploadData.mobile_flag=true
				}
				else{
					this.uploadData.mobile_flag=false
				}
			},
			
			isAddCount(e){
				if(e){
					this.uploadData.task_flag=true
				}
				else{
					this.uploadData.task_flag=false
				}
			},
			
			
			change(status) {
				console.log(status)
				this.open = status
			},
			
			change2(status) {
				console.log(status)
				this.open2 = status
			},
			
			change3(status) {
				console.log(status)
				this.open3 = status
			},
			
			// 选择营业时间
			selectTime(num) {
				this.showTime = true
				if (num == 1) {
					this.index = 1
				} else {
					this.index = 2
				}
			},
			chooseTime(res) {
				console.log(res)
				if (this.index == 1) {
					this.startTime = res.year + "-" + res.month + "-" + res.day + " " + res.hour + ":" + res.minute+":"+res.second;
					this.uploadData.activity_start_time=this.startTime
				} else {
					this.endTime = res.year + "-" + res.month + "-" + res.day + " " + res.hour + ":" + res.minute+":"+res.second;
					this.uploadData.activity_end_time=this.endTime
				}
			},
			
			// 选择营业时间
			selectTime2(num) {
				this.showTime2 = true
				if (num == 1) {
					this.index2 = 1
				} else {
					this.index2 = 2
				}
			},
			chooseTime2(res) {
				console.log(res)
				if (this.index2 == 1) {
					this.startTime2 = res.year + "-" + res.month + "-" + res.day + " " + res.hour + ":" + res.minute+":"+res.second;
					this.award1.prize_effective_start_time=this.startTime2
					
				} else {
					this.endTime2 = res.year + "-" + res.month + "-" + res.day + " " + res.hour + ":" + res.minute+":"+res.second;
					this.award1.prize_effective_end_time=this.endTime2
				}
			},
			
			// 选择营业时间
			selectTime3(num) {
				this.showTime3 = true
				if (num == 1) {
					this.index3 = 1
				} else {
					this.index3 = 2
				}
			},
			chooseTime3(res) {
				console.log(res)
				if (this.index3 == 1) {
					this.startTime3 = res.year + "-" + res.month + "-" + res.day + " " + res.hour + ":" + res.minute+":"+res.second;
					this.award2.prize_effective_start_time=this.startTime3
					
				} else {
					this.endTime3 = res.year + "-" + res.month + "-" + res.day + " " + res.hour + ":" + res.minute+":"+res.second;
					this.award2.prize_effective_end_time=this.endTime3
				}
			},
			
			// 选择营业时间
			selectTime4(num) {
				this.showTime4 = true
				if (num == 1) {
					this.index4 = 1
				} else {
					this.index4 = 2
				}
			},
			chooseTime4(res) {
				console.log(res)
				if (this.index4 == 1) {
					this.startTime4 = res.year + "-" + res.month + "-" + res.day + " " + res.hour + ":" + res.minute+":"+res.second;
					this.award3.prize_effective_start_time=this.startTime4
					
				} else {
					this.endTime4 = res.year + "-" + res.month + "-" + res.day + " " + res.hour + ":" + res.minute+":"+res.second;
					this.award3.prize_effective_end_time=this.endTime4
				}
			},
			
			// 选择营业时间
			selectTime5(num) {
				this.showTime5 = true
				if (num == 1) {
					this.index5 = 1
				} else {
					this.index5 = 2
				}
			},
			chooseTime5(res) {
				console.log(res)
				if (this.index5 == 1) {
					this.startTime5 = res.year + "-" + res.month + "-" + res.day + " " + res.hour + ":" + res.minute+":"+res.second;
					this.award4.prize_effective_start_time=this.startTime5
					
				} else {
					this.endTime5 = res.year + "-" + res.month + "-" + res.day + " " + res.hour + ":" + res.minute+":"+res.second;
					this.award4.prize_effective_end_time=this.endTime5
				}
			},
			
			
			
			chooseImageAct(){
				if(this.imageList.length<=9){
					uni.chooseImage({
					   count: 9, //默认9
					   success: (res) => {
					   	console.log(res.tempFilePaths);
						this.imageUrlList=res.tempFilePaths
						
					   },
					   fail: (err) => {
					   	console.log(err)
					   }
					});
				}
				else{
					uni.showToast({
						icon:"none",
						title:"最多上传9张"
					})
				}
			
			},
			
			previewImageAct(url){
				uni.previewImage({
					current:url,
					urls:this.imageUrlList,
					indicator:"default",
					success: (res) => {
						
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			
			
			chooseImage(index){
				uni.chooseImage({
				   count: 1, //默认9
				   success: (res) => {
				   	console.log(res.tempFilePaths);
					this.imageUrl1=res.tempFilePaths
					this.imageList=res.tempFilePaths
				   },
				   fail: (err) => {
				   	console.log(err)
				   }
				});
			
			},
			
			chooseImage2(index){
				uni.chooseImage({
				   count: 1, //默认9
				   success: (res) => {
				   	console.log(res.tempFilePaths);
					this.imageUrl2=res.tempFilePaths
					this.imageList2=res.tempFilePaths
				   },
				   fail: (err) => {
				   	console.log(err)
				   }
				});
			
			},
			
			chooseImage3(index){
				uni.chooseImage({
				   count: 1, //默认9
				   success: (res) => {
				   	console.log(res.tempFilePaths);
					this.imageUrl3=res.tempFilePaths
					this.imageList3=res.tempFilePaths
				   },
				   fail: (err) => {
				   	console.log(err)
				   }
				});
			
			},
			
			chooseImage4(index){
				uni.chooseImage({
				   count: 1, //默认9
				   success: (res) => {
				   	console.log(res.tempFilePaths);
					this.imageUrl4=res.tempFilePaths
					this.imageList4=res.tempFilePaths
				   },
				   fail: (err) => {
				   	console.log(err)
				   }
				});
			
			},
			
			
			previewImage(index){
				if(index==1){
					this.imgurls=this.imageList
				}
				else if(index==2){
					this.imgurls=this.imageList2
				}
				else if(index==3){
					this.imgurls=this.imageList3
				}
				else if(index==4){
					this.imgurls=this.imageList4
				}
				
				
				
				uni.previewImage({
					current:this.imageUrl+"index",
					urls:this.imgurls,
					indicator:"default",
					success: (res) => {
						
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			
			confirmFabu(){
				this.uploadData.prizes=[];
				if(this.awardNum==1){
					this.uploadData.prizes.push(this.award1)
				}
				else if(this.awardNum==2){
					this.uploadData.prizes.push(this.award1)
					this.uploadData.prizes.push(this.award2)
				}
				else if(this.awardNum==3){
					this.uploadData.prizes.push(this.award1)
					this.uploadData.prizes.push(this.award2)
					this.uploadData.prizes.push(this.award3)
				}
				else if(this.awardNum==4){
					this.uploadData.prizes.push(this.award1)
					this.uploadData.prizes.push(this.award2)
					this.uploadData.prizes.push(this.award3)
					this.uploadData.prizes.push(this.award4)
				}
				
				
				if(this.uploadData.activity_desc==""||this.uploadData.activity_rule==""||this.uploadData.activity_start_time==""||this.uploadData.activity_end_time==""||this.uploadData.daily_single_limit==""||this.uploadData.win_prize_times==""||this.uploadData.win_prize_probability==""){
					uni.showToast({
						icon:'none',
						title:"请输入完整"
					})
						return
				}
				
				if(this.task_flag){
					if(this.uploadData.task_increase_times==""){
						uni.showToast({
							icon:'none',
							title:"请输入完整"
						})
							return
					}
				}
				
				for (var i = 0; i < this.uploadData.prizes.length; i++) {
					// 判断是否有门槛
					if(this.uploadData.prizes[i].prize_use_threshold>0){
						this.uploadData.prizes[i].use_threshold_flag=true
					}
					
					// 判空操作
					if(this.uploadData.prizes[i].prize_type==1){
						if(this.uploadData.prizes[i].prize_coupon_price==""||this.uploadData.prizes[i].prize_use_threshold==""){
							uni.showToast({
								icon:'none',
								title:"请输入完整"
							})
							return
						}	
					}
					
					if(this.uploadData.prizes[i].prize_type==2){
						if(this.uploadData.prizes[i].prize_discount==""){
							uni.showToast({
								icon:'none',
								title:"请输入完整"
							})
								return
						}	
					}
					
					if(this.uploadData.prizes[i].prize_type==3){
						if(this.uploadData.prizes[i].prize_name==""){
							uni.showToast({
								icon:'none',
								title:"请输入完整"
							})
								return
						}	
					}
					
					if(this.uploadData.prizes[i].prize_effective_type==1){
						if(this.uploadData.prizes[i].prize_effective_start_time==""||this.uploadData.prizes[i].prize_effective_end_time==""){
							uni.showToast({
								icon:'none',
								title:"请输入完整"
							})
								return
						}	
					}
					
					if(this.uploadData.prizes[i].prize_effective_type==2){
						if(this.uploadData.prizes[i].prize_effective_days==""){
							uni.showToast({
								icon:'none',
								title:"请输入完整"
							})
								return
						}	
					}
					
					if(this.uploadData.prizes[i].prize_count==""){
						uni.showToast({
							icon:'none',
							title:"请输入完整"
						})
							return
					}	
					
					if(this.uploadData.prizes[i].prize_effective_scope==""){
						uni.showToast({
							icon:'none',
							title:"请输入完整"
						})
							return
					}
					
					if(this.uploadData.prizes[i].prize_daily_limit==""){
						uni.showToast({
							icon:'none',
							title:"请输入完整"
						})
							return
					}
					
					
					
				}
				
				
				$H.post("/activity_egg_frenzy",this.uploadData).then((res) => {
					//请求成功
				  console.log(res)
				
				}).catch((e) => {
				
					//请求失败
					console.log("失败" + e)
				})
				
				
			}
		}
	}
</script>

<style>

</style>
