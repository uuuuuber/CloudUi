<template>
    <div class="form">
    <div class="form-group">
      <label for="username" class="form-label">Username</label>
      <input type="text" id="username" class="form-input">
    </div>
    <div class="form-group">
      <label for="password" class="form-label">Password</label>
      <input type="password" id="password" class="form-input">
    </div>
    <button class="form-button">Login</button>
  </div>
</template>

<script setup>

</script>

<style scoped lang="less">
	@shadow-p: -2px -2px 8px rgba(255, 255, 255, 1),
    -2px -2px 12px rgba(255, 255, 255, 0.5),
    inset 2px 2px 4px rgba(255, 255, 255, 0.1),
    2px 2px 8px rgba(0, 0, 0, 0.15);
	@shadow-p-h: inset -2px -2px 8px rgba(255, 255, 255, 1),
			inset -2px -2px 12px rgba(255, 255, 255, 0.5),
			inset 2px 2px 4px rgba(255, 255, 255, 0.1),
			inset 2px 2px 8px rgba(0, 0, 0, 0.15);
		
    .form {
      width: 300px;
      padding: 20px;
      background-color: rgb(236, 240, 243);
      border-radius: 12px;
      box-shadow: -10px -10px 20px #ffffff, 10px 10px 20px #d4d4d4;

      .form-group {
				margin-bottom: 20px;

				.form-label {
					display: block;
					margin-bottom: 5px;
					font-weight: bold;
					color: #777;
				}

				.form-input {
					width: 100%;
					padding: 8px;
					background-color: #f4f4f4;
					border: none;
					border-radius: 8px;
					box-shadow: @shadow-p;
					box-sizing: border-box;
					color: #555;
					outline:none;
					&:hover{
						box-shadow: @shadow-p-h;
					}
				}

			}

			.form-group:last-child {
				margin-bottom: 0;
			}

			.form-button {
				width: 100%;
				padding: 10px;
				background-color: #5a84a2;
				color: #fff;
				border: none;
				border-radius: 8px;
				box-shadow: 4px 4px 8px #d4d4d4, -4px -4px 8px #ffffff;
				cursor: pointer;
				font-weight: bold;
			}

			.form-button:hover {
				background-color: #49C628;
			}
    }

</style>
