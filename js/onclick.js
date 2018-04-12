const btn = document.querySelector('.btn-nav');
		const holder = document.body;
	
		btn.addEventListener('click', (e)=>{
			e.preventDefault();
			holder.classList.toggle('nav-active');
		})