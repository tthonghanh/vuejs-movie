<template>
  <div class="headerComponent">

	
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component, Watch, VModel } from 'vue-property-decorator';

@Component
export default class HeaderComponent extends Vue {
	fullName = 'Tran Thi Hong Hanh';
	fullName1 = this.fullName + ' hello';
	changeData = false;
	// handleChangeName() {
	// 	console.log(this.name);
	// 	this.name = 'Hong Hanh';
	// }
	@Prop() readonly name!: string;

	get computedFullName() {
		return 'Hong Hanh';
	}

	@Watch('fullName')
	onDataChanged(value: string) {
		this.changeData = true;
		this.fullName = value;
	}

	@VModel({ type: String }) inputName: string = '';
}
</script>