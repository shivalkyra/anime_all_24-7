import '~/assets/scss/_header.scss';

export function Header() {
  return (
    <header>
      <div className="px-4 shadow-md py-2 ">
        <div className="flex justify-between container mx-auto items-center">
          <div className="w-[70px]">
            <img src="src/assets/images/logo.svg" />
          </div>
          <div className="w-full relative">
            <ul className="flex justify-center gap-x-6 cursor-pointer menu">
              <li><a href="">Trang chủ</a></li>
              <li><a href="">Dạng anime</a></li>
              <li><a href="">Top anime</a></li>
              <li className='flex gap-2 group'>
                <a href="">Thể loại</a>
                <div className='hidden group-hover:block absolute top-[20px] bg-white text-primary shadow-lg  p-4 text-center rounded-md'>
                  <ul className="flex gap-x-6 cursor-pointer menu">
                    <li><a href="">NTR</a></li>
                    <li><a href="">Rap</a></li>
                    <li><a href="">Milf</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="">Season</a></li>
              <li><a href="">Lịch chiếu</a></li>
            </ul>
          </div>
          <div className='flex gap-2'>
            <button className='w-100px h-40px font-semibold hover:shadow-xl transition-all duration-200 ease-linear text-center rounded px-2 bg-purple text-white shadow-md'>Đăng nhập</button>
            <button className='w-100px h-40px font-semibold hover:shadow-xl transition-all duration-200 ease-linear text-center rounded px-2 bg-metal text-white shadow-md'>Đăng ký</button>
          </div>
        </div>
      </div>
    </header>);
}