'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const site = 'https://laihokichbinhbmt24h.com';
const phone = '0849 813 813';
const tel = '0849813813';
const email = 'info@laihokichbinhbmt24h.com';
const lastmod = '2026-05-23';

function withBrand(title) {
    return title.includes('Lái Hộ BMT') ? title : `${title} - Lái Hộ BMT`;
}

const landingPages = [
    {
        slug: 'taxi-4-cho-bmt.html',
        title: 'Taxi 4 chỗ Buôn Ma Thuột 24/7',
        meta: 'Taxi 4 chỗ Buôn Ma Thuột cho 1-3 khách, đặt xe nhanh 24/7, giá minh bạch, phù hợp đi nội thành, sân bay và công việc.',
        image: 'taxi-4-cho.jpg',
        eyebrow: 'Taxi 4 chỗ BMT',
        lead: 'Xe 4 chỗ phù hợp khi bạn cần di chuyển nhanh, riêng tư và tiết kiệm trong nội thành Buôn Ma Thuột hoặc đi sân bay.',
        bullets: ['Phù hợp 1-3 hành khách và hành lý gọn', 'Có mặt nhanh trong khu vực trung tâm BMT', 'Báo giá rõ trước chuyến đi', 'Đặt xe qua hotline hoặc Zalo 24/7'],
        sections: [
            {
                heading: 'Khi nào nên chọn taxi 4 chỗ?',
                text: 'Taxi 4 chỗ là lựa chọn hợp lý cho khách đi làm, đi khám bệnh, gặp đối tác, đón người thân tại sân bay hoặc di chuyển ngắn trong thành phố. Xe nhỏ gọn nên dễ đón trả tại hẻm, khách sạn, quán cà phê và khu dân cư.'
            },
            {
                heading: 'Giá cước và cách đặt xe',
                text: 'Lái Hộ BMT báo giá theo hành trình, loại xe và thời điểm đặt. Khách có thể gọi trực tiếp để được tư vấn xe gần nhất, hoặc nhắn Zalo nếu cần gửi vị trí, ảnh hành lý hay điểm đón cụ thể.'
            },
            {
                heading: 'Khu vực phục vụ',
                text: 'Dịch vụ taxi 4 chỗ phục vụ TP. Buôn Ma Thuột, sân bay Buôn Ma Thuột, các tuyến đi Buôn Đôn, Cư M\'gar, Krông Pắk, Ea Kar và nhiều huyện trong tỉnh Đắk Lắk.'
            }
        ],
        faqs: [
            ['Taxi 4 chỗ có nhận đặt trước không?', 'Có. Bạn nên đặt trước khi đi sân bay, đi khám bệnh hoặc cần xe vào giờ cao điểm.'],
            ['Có thể thanh toán sau chuyến đi không?', 'Có. Tài xế xác nhận giá và hình thức thanh toán trước khi khởi hành.']
        ]
    },
    {
        slug: 'taxi-7-cho-bmt.html',
        title: 'Taxi 7 chỗ Buôn Ma Thuột cho gia đình và nhóm nhỏ',
        meta: 'Taxi 7 chỗ Buôn Ma Thuột phục vụ gia đình, nhóm bạn, khách du lịch, đi sân bay và tour Đắk Lắk. Gọi 0849 813 813.',
        image: 'taxi-7-cho.jpg',
        eyebrow: 'Taxi 7 chỗ BMT',
        lead: 'Xe 7 chỗ rộng rãi cho gia đình, nhóm bạn hoặc khách có nhiều hành lý khi di chuyển tại Buôn Ma Thuột và Đắk Lắk.',
        bullets: ['Không gian rộng cho 4-6 khách', 'Phù hợp đi sân bay, tour ngắn và liên huyện', 'Tài xế quen đường địa phương', 'Nhận đặt xe sớm cho lịch trình cố định'],
        sections: [
            {
                heading: 'Phù hợp cho gia đình và du lịch',
                text: 'Taxi 7 chỗ giúp hành trình thoải mái hơn khi đi cùng trẻ em, người lớn tuổi hoặc mang nhiều hành lý. Đây là dòng xe thường được chọn cho các tuyến Buôn Ma Thuột - Buôn Đôn, Hồ Lắk, thác Đray Sáp và các điểm du lịch Tây Nguyên.'
            },
            {
                heading: 'Đặt xe đúng nhu cầu',
                text: 'Khi đặt xe, bạn chỉ cần báo số lượng khách, hành lý, điểm đón và điểm đến. Lái Hộ BMT sẽ tư vấn xe phù hợp để tránh thiếu chỗ hoặc phát sinh đổi xe sát giờ.'
            },
            {
                heading: 'Dịch vụ 24/7',
                text: 'Đội xe nhận đặt cả sáng sớm, đêm muộn, ngày lễ và cuối tuần. Với lịch đi sân bay hoặc liên tỉnh, khách nên đặt trước để giữ xe và tài xế đúng giờ.'
            }
        ],
        faqs: [
            ['Xe 7 chỗ có đi liên tỉnh không?', 'Có. Dịch vụ nhận tuyến Đắk Lắk đi Đà Lạt, Nha Trang, TP.HCM và các tỉnh lân cận theo báo giá trước.'],
            ['Có chở được nhiều hành lý không?', 'Có, nhưng bạn nên báo trước số lượng vali để chọn cấu hình xe phù hợp.']
        ]
    },
    {
        slug: 'taxi-san-bay-buon-ma-thuot.html',
        title: 'Taxi sân bay Buôn Ma Thuột 24/7',
        meta: 'Đặt taxi sân bay Buôn Ma Thuột 24/7, đón tiễn đúng giờ, xe 4 chỗ, 7 chỗ, 9 chỗ, báo giá rõ trước chuyến đi.',
        image: 'banner-service.jpg',
        eyebrow: 'Đưa đón sân bay BMT',
        lead: 'Dịch vụ taxi sân bay Buôn Ma Thuột hỗ trợ đón tiễn đúng giờ, phù hợp khách công tác, gia đình và khách du lịch đến Đắk Lắk.',
        bullets: ['Theo dõi giờ đón và hỗ trợ thay đổi lịch', 'Có xe 4 chỗ, 7 chỗ, 9 chỗ', 'Đón tại sân bay, khách sạn, nhà riêng', 'Báo giá rõ, hạn chế phát sinh'],
        sections: [
            {
                heading: 'Đón sân bay không phải chờ lâu',
                text: 'Khách hạ cánh tại sân bay Buôn Ma Thuột có thể gọi hoặc nhắn Zalo để tài xế xác nhận điểm đón. Với lịch bay sáng sớm hoặc tối muộn, nên đặt trước để xe có mặt đúng giờ.'
            },
            {
                heading: 'Tuyến phổ biến',
                text: 'Các tuyến thường gặp gồm sân bay Buôn Ma Thuột về trung tâm thành phố, khách sạn, bệnh viện, Buôn Đôn, Cư M\'gar, Krông Pắk, Ea Kar, Hồ Lắk và các huyện trong tỉnh Đắk Lắk.'
            },
            {
                heading: 'Lưu ý khi đặt xe sân bay',
                text: 'Bạn nên gửi mã chuyến bay, giờ hạ cánh, số khách, số vali và điểm đến. Thông tin càng rõ, tài xế càng dễ bố trí xe đúng loại và đón đúng vị trí.'
            }
        ],
        faqs: [
            ['Có đặt xe từ nhà ra sân bay được không?', 'Có. Lái Hộ BMT nhận cả chiều đưa ra sân bay và chiều đón từ sân bay về.'],
            ['Nếu chuyến bay trễ thì sao?', 'Bạn nên báo lại qua Zalo hoặc hotline để tài xế điều chỉnh giờ đón phù hợp.']
        ]
    },
    {
        slug: 'taxi-buon-ma-thuot-di-san-bay.html',
        title: 'Taxi Buôn Ma Thuột đi sân bay',
        meta: 'Taxi Buôn Ma Thuột đi sân bay 24/7, đón tận nơi, xe 4 chỗ, 7 chỗ, 9 chỗ, đặt trước đúng giờ, báo giá rõ ràng.',
        image: 'banner-service.jpg',
        eyebrow: 'Taxi đi sân bay',
        lead: 'Dịch vụ taxi Buôn Ma Thuột đi sân bay phù hợp khách cần ra sân bay đúng giờ, có tài xế xác nhận lịch và hỗ trợ hành lý.',
        bullets: ['Đón tại nhà, khách sạn, bệnh viện, văn phòng', 'Phục vụ chuyến bay sáng sớm và tối muộn', 'Có xe 4 chỗ, 7 chỗ, 9 chỗ theo số khách', 'Xác nhận giá và giờ đón trước chuyến đi'],
        sections: [
            {
                heading: 'Đặt taxi ra sân bay đúng giờ',
                text: 'Với chuyến bay, khách nên đặt xe sớm để tài xế chủ động tính thời gian di chuyển, điểm đón và tình trạng giao thông. Lái Hộ BMT nhận lịch đi sân bay từ trung tâm Buôn Ma Thuột, khu dân cư, khách sạn, bệnh viện và các huyện lân cận.'
            },
            {
                heading: 'Nên đặt trước bao lâu?',
                text: 'Nếu bay giờ cao điểm, sáng sớm hoặc cuối tuần, bạn nên đặt trước ít nhất vài tiếng. Khi đặt, hãy gửi giờ bay, số khách, hành lý và điểm đón cụ thể để được tư vấn loại xe phù hợp.'
            },
            {
                heading: 'Phù hợp nhiều nhu cầu',
                text: 'Xe 4 chỗ phù hợp khách đi ít người, xe 7 chỗ dành cho gia đình nhiều hành lý, xe 9 chỗ phù hợp nhóm đông hoặc đoàn công tác. Tài xế xác nhận lịch trước khi khởi hành để hạn chế trễ giờ.'
            }
        ],
        faqs: [
            ['Taxi đi sân bay có chạy 24/7 không?', 'Có. Lái Hộ BMT nhận lịch ra sân bay cả sáng sớm, đêm muộn, cuối tuần và ngày lễ.'],
            ['Có cần gửi mã chuyến bay không?', 'Nên gửi mã chuyến bay hoặc giờ bay để tài xế chủ động căn thời gian đón hợp lý.']
        ]
    },
    {
        slug: 'taxi-buon-ma-thuot-di-buon-don.html',
        title: 'Taxi Buôn Ma Thuột đi Buôn Đôn',
        meta: 'Đặt taxi Buôn Ma Thuột đi Buôn Đôn cho gia đình, nhóm bạn, khách du lịch. Xe riêng, tài xế địa phương, báo giá trước.',
        image: 'taxi-7-cho.jpg',
        eyebrow: 'Taxi đi Buôn Đôn',
        lead: 'Tuyến taxi Buôn Ma Thuột đi Buôn Đôn phù hợp khách du lịch, gia đình và nhóm bạn muốn chủ động thời gian tham quan.',
        bullets: ['Xe riêng đưa đón theo lịch trình', 'Phù hợp xe 4 chỗ, 7 chỗ hoặc 9 chỗ', 'Có thể đi về trong ngày', 'Tài xế quen tuyến Buôn Ma Thuột - Buôn Đôn'],
        sections: [
            {
                heading: 'Chủ động lịch trình tham quan',
                text: 'Buôn Đôn là điểm đến phổ biến khi du lịch Đắk Lắk. Đi taxi riêng giúp bạn chủ động giờ xuất phát, thời gian dừng nghỉ và điểm trả khách, đặc biệt khi đi cùng trẻ em hoặc người lớn tuổi.'
            },
            {
                heading: 'Nên chọn xe nào?',
                text: 'Nhóm 1-3 khách có thể chọn taxi 4 chỗ. Gia đình hoặc nhóm 4-6 khách nên chọn xe 7 chỗ để thoải mái hơn. Nhóm đông, đoàn nhỏ hoặc khách có nhiều hành lý có thể chọn xe 9 chỗ.'
            },
            {
                heading: 'Báo giá theo lịch trình',
                text: 'Giá tuyến Buôn Ma Thuột đi Buôn Đôn phụ thuộc điểm đón, điểm trả, thời gian chờ và số điểm ghé. Khách nên gửi lịch trình trước để Lái Hộ BMT báo giá rõ ràng, hạn chế phát sinh.'
            }
        ],
        faqs: [
            ['Taxi đi Buôn Đôn có chờ khách tham quan không?', 'Có. Bạn nên báo trước thời gian chờ dự kiến để được báo giá phù hợp.'],
            ['Có nhận đón từ sân bay đi Buôn Đôn không?', 'Có. Dịch vụ nhận đón từ sân bay Buôn Ma Thuột, trung tâm thành phố hoặc khách sạn đi Buôn Đôn.']
        ]
    },
    {
        slug: 'thue-xe-7-cho-buon-ma-thuot.html',
        title: 'Thuê xe 7 chỗ Buôn Ma Thuột',
        meta: 'Thuê xe 7 chỗ Buôn Ma Thuột có tài xế, phục vụ gia đình, du lịch, công tác, sân bay và liên huyện Đắk Lắk.',
        image: 'taxi-7-cho.jpg',
        eyebrow: 'Thuê xe 7 chỗ',
        lead: 'Thuê xe 7 chỗ Buôn Ma Thuột là lựa chọn phù hợp cho gia đình, nhóm bạn, khách công tác hoặc lịch trình cần nhiều điểm dừng.',
        bullets: ['Xe rộng cho gia đình và nhóm nhỏ', 'Có tài xế địa phương am hiểu tuyến đường', 'Nhận lịch nửa ngày, một ngày hoặc nhiều ngày', 'Báo giá theo tuyến và thời gian sử dụng'],
        sections: [
            {
                heading: 'Thuê xe 7 chỗ có tài xế',
                text: 'Dịch vụ thuê xe 7 chỗ có tài xế giúp khách không phải tự lái, dễ sắp xếp lịch trình và chủ động điểm dừng. Đây là lựa chọn phù hợp cho đi sân bay, đi tour Buôn Đôn, Hồ Lắk, thác Đray Sáp hoặc đi công tác liên huyện.'
            },
            {
                heading: 'Lịch trình linh hoạt',
                text: 'Khách có thể thuê theo chuyến, theo buổi, theo ngày hoặc nhiều ngày tùy nhu cầu. Với lịch trình dài, Lái Hộ BMT sẽ tư vấn thời gian xuất phát, điểm nghỉ và loại xe phù hợp.'
            },
            {
                heading: 'Cần chuẩn bị thông tin gì?',
                text: 'Khi liên hệ, bạn nên gửi ngày đi, số khách, số điểm dừng, thời gian chờ và điểm trả khách. Những thông tin này giúp báo giá chính xác và bố trí tài xế đúng lịch.'
            }
        ],
        faqs: [
            ['Thuê xe 7 chỗ có tài xế không?', 'Có. Dịch vụ thuê xe 7 chỗ của Lái Hộ BMT đi kèm tài xế địa phương.'],
            ['Có thuê xe 7 chỗ đi tỉnh được không?', 'Có. Khách có thể thuê xe đi các huyện Đắk Lắk hoặc đi tỉnh theo lịch trình báo trước.']
        ]
    },
    {
        slug: 'lai-ho-buon-ma-thuot-24h.html',
        title: 'Lái hộ Buôn Ma Thuột 24h',
        meta: 'Dịch vụ lái hộ Buôn Ma Thuột 24h, tài xế nhận lái xe thay khi khách mệt, đi tiệc, tiếp khách hoặc cần đưa xe về an toàn.',
        image: 'banner-hero.jpg',
        eyebrow: 'Lái hộ BMT 24h',
        lead: 'Dịch vụ lái hộ Buôn Ma Thuột 24h hỗ trợ khách cần tài xế lái xe thay để về nhà an toàn sau tiệc, công việc hoặc hành trình dài.',
        bullets: ['Hỗ trợ gọi tài xế lái hộ 24/7', 'Phù hợp sau tiệc, tiếp khách, mệt mỏi hoặc không tiện tự lái', 'Tài xế xác nhận điểm đón và điểm trả rõ ràng', 'Ưu tiên an toàn cho người và xe'],
        sections: [
            {
                heading: 'Khi nào nên gọi lái hộ?',
                text: 'Bạn nên gọi lái hộ khi đã dùng rượu bia, cảm thấy mệt, không quen đường ban đêm hoặc cần người đưa xe về nhà an toàn. Dịch vụ đặc biệt hữu ích sau tiệc cưới, tiếp khách, liên hoan công ty hoặc những chuyến đi dài.'
            },
            {
                heading: 'Quy trình đặt lái hộ',
                text: 'Khách gọi hotline hoặc nhắn Zalo, gửi điểm đón, điểm trả, loại xe và thời gian cần tài xế. Lái Hộ BMT xác nhận lại thông tin, báo giá và điều tài xế phù hợp.'
            },
            {
                heading: 'Ưu tiên an toàn và minh bạch',
                text: 'Tài xế lái hộ cần xác nhận hành trình trước khi nhận chuyến. Khách nên kiểm tra tư trang, giấy tờ xe và thống nhất điểm trả để quá trình di chuyển rõ ràng, an toàn.'
            }
        ],
        faqs: [
            ['Dịch vụ lái hộ có hoạt động ban đêm không?', 'Có. Lái Hộ BMT nhận hỗ trợ lái hộ 24h, bao gồm buổi tối, cuối tuần và ngày lễ.'],
            ['Có cần đặt trước tài xế lái hộ không?', 'Nếu cần vào giờ cao điểm hoặc sau tiệc, bạn nên đặt trước để được bố trí tài xế nhanh hơn.']
        ]
    }
];

const articles = [
    {
        slug: 'uu-dai-don-san-bay-buon-ma-thuot.html',
        title: 'Ưu đãi đón sân bay Buôn Ma Thuột khi đặt trước',
        description: 'Lái Hộ BMT triển khai ưu đãi cho khách đặt trước chuyến đưa đón sân bay Buôn Ma Thuột qua hotline hoặc Zalo.',
        date: '2026-03-15',
        displayDate: '15 tháng 3, 2026',
        image: 'taxi-4-cho.jpg',
        paragraphs: [
            'Với các chuyến đi sân bay, thời gian là yếu tố quan trọng nhất. Lái Hộ BMT khuyến khích khách đặt trước để tài xế chủ động lịch trình, kiểm tra điểm đón và chọn loại xe phù hợp với số khách.',
            'Ưu đãi áp dụng cho khách đặt trước qua hotline hoặc Zalo, đặc biệt với các khung giờ sáng sớm, tối muộn hoặc cuối tuần. Khi đặt, khách nên gửi giờ bay, điểm đón, số khách và số lượng hành lý.',
            'Dịch vụ có xe 4 chỗ, 7 chỗ và 9 chỗ. Khách đi một mình hoặc ít hành lý có thể chọn xe 4 chỗ; gia đình hoặc nhóm bạn nên chọn xe 7 chỗ để có không gian thoải mái hơn.',
            'Để đặt xe sân bay Buôn Ma Thuột, gọi 0849 813 813 hoặc nhắn Zalo cùng số điện thoại. Tài xế sẽ xác nhận lại giá và thời gian trước chuyến đi.'
        ]
    },
    {
        slug: 'mo-rong-ea-hleo-ea-kar.html',
        title: 'Lái Hộ BMT mở rộng phục vụ Ea H\'leo và Ea Kar',
        description: 'Từ tháng 3/2026, Lái Hộ BMT mở rộng dịch vụ taxi 24/7 đến Ea H\'leo, Ea Kar và nhiều khu vực tại Đắk Lắk.',
        date: '2026-03-02',
        displayDate: '2 tháng 3, 2026',
        image: 'taxi-7-cho.jpg',
        paragraphs: [
            'Nhu cầu di chuyển giữa TP. Buôn Ma Thuột và các huyện trong tỉnh Đắk Lắk ngày càng tăng, đặc biệt với khách đi công tác, khám bệnh, sân bay và du lịch gia đình.',
            'Từ tháng 3/2026, Lái Hộ BMT mở rộng phạm vi phục vụ đến Ea H\'leo và Ea Kar. Khách tại các khu vực này có thể đặt xe theo chuyến, đặt xe chiều về hoặc đặt xe trọn gói theo lịch trình.',
            'Đội xe gồm 4 chỗ, 7 chỗ và 9 chỗ, phù hợp nhiều nhu cầu khác nhau. Với tuyến dài, khách nên liên hệ trước để được báo giá cố định và giữ xe đúng giờ.',
            'Việc mở rộng giúp khách ở huyện có thêm lựa chọn xe rõ giá, tài xế quen đường và hỗ trợ đặt nhanh qua điện thoại hoặc Zalo.'
        ]
    },
    {
        slug: 'top-diem-du-lich-dak-lak.html',
        title: 'Top điểm du lịch Đắk Lắk nên đi bằng taxi riêng',
        description: 'Gợi ý các điểm du lịch Đắk Lắk phù hợp để đi bằng taxi riêng: Buôn Đôn, Hồ Lắk, thác Đray Sáp và nhiều điểm khác.',
        date: '2026-02-20',
        displayDate: '20 tháng 2, 2026',
        image: 'taxi-9-cho.jpg',
        paragraphs: [
            'Đắk Lắk có nhiều điểm du lịch nằm ngoài trung tâm, vì vậy taxi riêng là lựa chọn thuận tiện cho gia đình, nhóm bạn hoặc khách lần đầu đến Tây Nguyên.',
            'Buôn Đôn phù hợp với lịch trình nửa ngày hoặc một ngày. Hồ Lắk thích hợp cho khách muốn trải nghiệm cảnh quan yên tĩnh, còn thác Đray Sáp là điểm đến được nhiều nhóm trẻ lựa chọn.',
            'Khi đi theo nhóm, xe 7 chỗ hoặc 9 chỗ giúp tối ưu chi phí và chủ động thời gian dừng nghỉ. Tài xế địa phương cũng có thể tư vấn tuyến đường hợp lý để tránh mất thời gian di chuyển vòng.',
            'Trước khi đi, bạn nên thống nhất số điểm dừng, thời gian chờ và điểm trả khách. Lái Hộ BMT sẽ báo giá theo lịch trình để khách dễ kiểm soát chi phí.'
        ]
    },
    {
        slug: 'meo-dat-taxi-tiet-kiem-buon-ma-thuot.html',
        title: '5 mẹo đặt taxi tiết kiệm khi du lịch Buôn Ma Thuột',
        description: 'Kinh nghiệm đặt taxi tiết kiệm tại Buôn Ma Thuột: đặt trước, chọn đúng loại xe, gom điểm đến và xác nhận giá trước chuyến đi.',
        date: '2026-02-10',
        displayDate: '10 tháng 2, 2026',
        image: 'news-meo-taxi.jpg',
        paragraphs: [
            'Đặt taxi tiết kiệm không chỉ là tìm giá thấp nhất, mà là chọn đúng xe, đúng tuyến và rõ chi phí trước khi đi. Điều này đặc biệt quan trọng với khách du lịch Buôn Ma Thuột.',
            'Mẹo đầu tiên là đặt trước nếu bạn cần đi sân bay, đi tour hoặc đi vào giờ cao điểm. Mẹo thứ hai là chọn đúng loại xe: 4 chỗ cho nhóm nhỏ, 7 chỗ cho gia đình và 9 chỗ cho nhóm đông.',
            'Mẹo thứ ba là gom các điểm đến gần nhau trong cùng một hành trình. Mẹo thứ tư là gửi định vị rõ ràng để tài xế đến đúng điểm đón. Mẹo cuối cùng là xác nhận giá, thời gian chờ và phụ phí nếu có trước khi khởi hành.',
            'Lái Hộ BMT hỗ trợ tư vấn loại xe và tuyến đi phù hợp qua hotline 0849 813 813 hoặc Zalo.'
        ]
    },
    {
        slug: 'xe-hop-dong-doanh-nghiep-dak-lak.html',
        title: 'Dịch vụ xe hợp đồng dài hạn cho doanh nghiệp tại Đắk Lắk',
        description: 'Lái Hộ BMT cung cấp xe hợp đồng theo tháng cho doanh nghiệp tại Buôn Ma Thuột và Đắk Lắk, tài xế ổn định, lịch trình linh hoạt.',
        date: '2026-02-01',
        displayDate: '1 tháng 2, 2026',
        image: 'news-hop-dong.jpg',
        paragraphs: [
            'Doanh nghiệp tại Buôn Ma Thuột thường cần xe ổn định cho lịch trình đưa đón nhân sự, đối tác, chuyên gia hoặc khách hàng. Dịch vụ xe hợp đồng giúp kiểm soát chi phí tốt hơn so với đặt từng chuyến rời.',
            'Lái Hộ BMT nhận xe hợp đồng theo ngày, theo tuần hoặc theo tháng. Khách có thể chọn xe 4 chỗ, 7 chỗ hoặc 9 chỗ tùy số lượng người và tần suất di chuyển.',
            'Ưu điểm của xe hợp đồng là tài xế nắm lịch trình quen thuộc, chủ động giờ giấc và có thể hỗ trợ nhiều điểm dừng trong cùng một ngày làm việc.',
            'Doanh nghiệp cần báo trước nhu cầu sử dụng, khung giờ, tuyến thường đi và yêu cầu hóa đơn/chứng từ nếu có để được tư vấn phương án phù hợp.'
        ]
    },
    {
        slug: 'taxi-duoc-yeu-thich-dak-lak-2025.html',
        title: 'Lái Hộ BMT được khách hàng Đắk Lắk tin chọn trong năm 2025',
        description: 'Nhìn lại năm 2025 của Lái Hộ BMT với các tiêu chí được khách hàng đánh giá cao: đúng giờ, rõ giá, tài xế thân thiện.',
        date: '2026-01-15',
        displayDate: '15 tháng 1, 2026',
        image: 'banner-about.jpg',
        paragraphs: [
            'Năm 2025 ghi nhận nhu cầu đặt taxi, lái hộ và xe hợp đồng tại Buôn Ma Thuột tăng mạnh. Khách hàng ưu tiên các đơn vị có phản hồi nhanh, giá rõ ràng và tài xế am hiểu địa phương.',
            'Lái Hộ BMT tập trung vào ba tiêu chí chính: đúng giờ, an toàn và minh bạch chi phí. Đây là những yếu tố ảnh hưởng trực tiếp đến trải nghiệm của khách đi sân bay, đi khám bệnh, công tác hoặc du lịch.',
            'Bên cạnh nội thành Buôn Ma Thuột, dịch vụ cũng mở rộng đến nhiều khu vực trong tỉnh Đắk Lắk, giúp khách ở huyện có thêm lựa chọn đặt xe chủ động hơn.',
            'Trong thời gian tới, Lái Hộ BMT tiếp tục tối ưu quy trình đặt xe qua hotline và Zalo, đồng thời phát triển thêm nội dung hướng dẫn di chuyển để khách dễ lập kế hoạch hơn.'
        ]
    }
];

function escapeJson(value) {
    return JSON.stringify(value);
}

function head({ title, description, canonical, image, schema, ogType = 'website' }) {
    return `    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${description}">
    <link rel="canonical" href="${canonical}">
    <meta property="og:locale" content="vi_VN">
    <meta property="og:type" content="${ogType}">
    <meta property="og:site_name" content="Lái Hộ BMT">
    <meta property="og:title" content="${withBrand(title)}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${site}/assets/images/${image}">
    <meta name="twitter:card" content="summary_large_image">
    <title>${withBrand(title)}</title>
    <script type="application/ld+json">
    ${JSON.stringify(schema, null, 8)}
    </script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        crossorigin="anonymous"
        referrerpolicy="no-referrer">
    <link rel="stylesheet" href="../css/main.css">`;
}

function header(active) {
    const nav = [
        ['Trang chủ', '../index.html', 'house', 'home'],
        ['Giới thiệu', './about.html', 'circle-info', 'about'],
        ['Dịch vụ', './service.html', 'taxi', 'service'],
        ['Tin tức', './news.html', 'newspaper', 'news'],
        ['Liên hệ', './contact.html', 'envelope', 'contact']
    ];
    const desktop = nav.map(([label, href,, key]) => `
            <li class="header__menu-item" role="none">
                <a class="header__menu-link${key === active ? ' header__menu-link--active' : ''}" href="${href}" role="menuitem">${label}</a>
            </li>`).join('');
    const mobile = nav.map(([label, href, icon, key]) => `
        <a class="mobile-menu__link${key === active ? ' mobile-menu__link--active' : ''}" href="${href}">
            <i class="fa-solid fa-${icon}" aria-hidden="true"></i>
            ${label}
        </a>`).join('');

    return `<div class="overlay"></div>

<header class="header" id="header">
    <nav class="header__nav" aria-label="Menu chính">
        <a class="header__logo" href="../index.html">
            <div class="header__logo-icon" aria-hidden="true">
                <i class="fa-solid fa-taxi"></i>
            </div>
            <span class="header__logo-text">Lái Hộ <span>BMT</span></span>
        </a>
        <ul class="header__menu" role="menubar">${desktop}
        </ul>
        <a class="header__hotline js-phone-link" href="tel:${tel}" aria-label="Gọi hotline">
            <i class="fa-solid fa-phone" aria-hidden="true"></i>
            <span class="js-phone-text">${phone}</span>
        </a>
        <button class="header__hamburger" type="button" aria-label="Mở menu" aria-expanded="false" aria-controls="mobile-menu">
            <span class="header__hamburger-line"></span>
            <span class="header__hamburger-line"></span>
            <span class="header__hamburger-line"></span>
        </button>
    </nav>
</header>

<nav class="mobile-menu" id="mobile-menu" aria-label="Menu di động">
    <div class="mobile-menu__header">
        <div class="mobile-menu__brand">
            <div class="mobile-menu__brand-icon" aria-hidden="true">
                <i class="fa-solid fa-taxi"></i>
            </div>
            Lái Hộ <span>BMT</span>
        </div>
        <button class="mobile-menu__close" type="button" aria-label="Đóng menu">
            <i class="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>
    </div>
    <div class="mobile-menu__nav">${mobile}
    </div>
    <div class="mobile-menu__footer">
        <a class="mobile-menu__hotline js-phone-link" href="tel:${tel}" aria-label="Gọi hotline">
            <i class="fa-solid fa-phone" aria-hidden="true"></i>
            <span class="js-phone-text">${phone}</span>
        </a>
    </div>
</nav>`;
}

function footer() {
    return `<section class="cta-banner" aria-label="Đặt xe ngay">
    <div class="cta-banner__inner fade-in">
        <h2 class="cta-banner__title">Cần đặt xe ngay?<br><span>Gọi Lái Hộ BMT 24/7</span></h2>
        <p class="cta-banner__desc">Phục vụ Buôn Ma Thuột và toàn tỉnh Đắk Lắk</p>
        <div class="cta-banner__btns">
            <a class="btn btn--primary btn--lg js-phone-link" href="tel:${tel}">
                <i class="fa-solid fa-phone" aria-hidden="true"></i>
                <span class="js-phone-text">${phone}</span>
            </a>
            <a class="btn btn--outline-white btn--lg js-zalo-link" href="https://zalo.me/${tel}" target="_blank" rel="noopener noreferrer">
                <i class="fa-solid fa-comment-dots" aria-hidden="true"></i>
                Chat Zalo
            </a>
        </div>
    </div>
</section>

<footer class="footer">
    <div class="footer__main">
        <div class="footer__grid">
            <div class="footer__brand">
                <a class="header__logo" href="../index.html">
                    <div class="header__logo-icon" aria-hidden="true">
                        <i class="fa-solid fa-taxi"></i>
                    </div>
                    <span class="header__logo-text">Lái Hộ <span>BMT</span></span>
                </a>
                <p class="footer__brand-desc">Dịch vụ taxi, lái hộ, đưa đón sân bay và xe hợp đồng tại Buôn Ma Thuột, Đắk Lắk.</p>
            </div>
            <div class="footer__col">
                <h3 class="footer__col-title">Dịch vụ</h3>
                <ul class="footer__col-list" role="list">
                    <li><a href="./taxi-4-cho-bmt.html"><i class="fa-solid fa-car" aria-hidden="true"></i>Taxi 4 chỗ</a></li>
                    <li><a href="./taxi-7-cho-bmt.html"><i class="fa-solid fa-van-shuttle" aria-hidden="true"></i>Taxi 7 chỗ</a></li>
                    <li><a href="./taxi-san-bay-buon-ma-thuot.html"><i class="fa-solid fa-plane-arrival" aria-hidden="true"></i>Taxi sân bay</a></li>
                    <li><a href="./taxi-buon-ma-thuot-di-san-bay.html"><i class="fa-solid fa-route" aria-hidden="true"></i>Taxi đi sân bay</a></li>
                    <li><a href="./taxi-buon-ma-thuot-di-buon-don.html"><i class="fa-solid fa-map-location-dot" aria-hidden="true"></i>Taxi đi Buôn Đôn</a></li>
                    <li><a href="./thue-xe-7-cho-buon-ma-thuot.html"><i class="fa-solid fa-users" aria-hidden="true"></i>Thuê xe 7 chỗ</a></li>
                    <li><a href="./lai-ho-buon-ma-thuot-24h.html"><i class="fa-solid fa-key" aria-hidden="true"></i>Lái hộ 24h</a></li>
                    <li><a href="./service.html"><i class="fa-solid fa-handshake" aria-hidden="true"></i>Bảng giá dịch vụ</a></li>
                </ul>
            </div>
            <div class="footer__col">
                <h3 class="footer__col-title">Tin tức</h3>
                <ul class="footer__col-list" role="list">
                    <li><a href="./meo-dat-taxi-tiet-kiem-buon-ma-thuot.html"><i class="fa-solid fa-newspaper" aria-hidden="true"></i>Mẹo đặt taxi</a></li>
                    <li><a href="./top-diem-du-lich-dak-lak.html"><i class="fa-solid fa-map-location-dot" aria-hidden="true"></i>Du lịch Đắk Lắk</a></li>
                    <li><a href="./news.html"><i class="fa-solid fa-list" aria-hidden="true"></i>Tất cả tin tức</a></li>
                </ul>
            </div>
            <div class="footer__col">
                <h3 class="footer__col-title">Liên hệ</h3>
                <ul class="footer__col-list footer__contact" role="list">
                    <li class="footer__contact-item"><span class="footer__contact-icon" aria-hidden="true"><i class="fa-solid fa-phone"></i></span><span>Hotline 24/7<br><a class="footer__contact-highlight js-phone-link" href="tel:${tel}"><span class="js-phone-text">${phone}</span></a></span></li>
                    <li class="footer__contact-item"><span class="footer__contact-icon" aria-hidden="true"><i class="fa-solid fa-envelope"></i></span><span>${email}</span></li>
                    <li class="footer__contact-item"><span class="footer__contact-icon" aria-hidden="true"><i class="fa-solid fa-location-dot"></i></span><span>TP. Buôn Ma Thuột, Đắk Lắk</span></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer__bottom">
        <div class="footer__bottom-inner">
            <p>© 2026 <strong>Lái Hộ BMT</strong> – Taxi Buôn Ma Thuột</p>
            <ul class="footer__bottom-links" role="list">
                <li><a href="./about.html">Giới thiệu</a></li>
                <li><a href="./service.html">Dịch vụ</a></li>
                <li><a href="./contact.html">Liên hệ</a></li>
            </ul>
        </div>
    </div>
</footer>

<div class="float-contact" aria-label="Liên hệ nhanh">
    <a class="float-contact__btn float-contact__btn--zalo js-zalo-link" href="https://zalo.me/${tel}" target="_blank" rel="noopener noreferrer" aria-label="Chat Zalo">
        <i class="fa-solid fa-comment-dots"></i>
    </a>
    <a class="float-contact__btn float-contact__btn--phone float-contact__btn--pulse js-phone-link" href="tel:${tel}" aria-label="Gọi điện ngay">
        <i class="fa-solid fa-phone"></i>
    </a>
</div>

<script src="../js/config.js"></script>
<script src="../js/main.js"></script>`;
}

function pageHero(title, image, breadcrumb) {
    return `<div class="page-hero">
        <div class="page-hero__bg" aria-hidden="true">
            <img src="../assets/images/${image}" alt="" loading="eager">
        </div>
        <div class="page-hero__overlay" aria-hidden="true"></div>
        <div class="page-hero__content">
            <h1 class="page-hero__title">${title}</h1>
            <nav class="page-hero__breadcrumb" aria-label="Đường dẫn">
                <a href="../index.html">Trang chủ</a>
                <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
                <a href="./service.html">${breadcrumb[0]}</a>
                <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
                <span aria-current="page">${breadcrumb[1]}</span>
            </nav>
        </div>
    </div>`;
}

function landingSchema(page) {
    const canonical = `${site}/pages/${page.slug}`;
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: `${site}/` },
                    { '@type': 'ListItem', position: 2, name: 'Dịch vụ', item: `${site}/pages/service.html` },
                    { '@type': 'ListItem', position: 3, name: page.title, item: canonical }
                ]
            },
            {
                '@type': 'Service',
                '@id': `${canonical}#service`,
                name: page.title,
                description: page.meta,
                provider: { '@id': `${site}/#localbusiness` },
                areaServed: { '@type': 'AdministrativeArea', name: 'Đắk Lắk' },
                url: canonical,
                serviceType: page.eyebrow
            },
            {
                '@type': 'FAQPage',
                mainEntity: page.faqs.map(([question, answer]) => ({
                    '@type': 'Question',
                    name: question,
                    acceptedAnswer: { '@type': 'Answer', text: answer }
                }))
            }
        ]
    };
}

function renderLanding(page) {
    const canonical = `${site}/pages/${page.slug}`;
    const schema = landingSchema(page);
    const bullets = page.bullets.map(item => `<li><i class="fa-solid fa-check" aria-hidden="true"></i>${item}</li>`).join('\n                        ');
    const sections = page.sections.map(section => `
                <article class="feature-card fade-in">
                    <h2 class="feature-card__title">${section.heading}</h2>
                    <p class="feature-card__desc">${section.text}</p>
                </article>`).join('');
    const faqs = page.faqs.map(([question, answer]) => `
                <article class="feature-card fade-in">
                    <h3 class="feature-card__title">${question}</h3>
                    <p class="feature-card__desc">${answer}</p>
                </article>`).join('');

    return `<!DOCTYPE html>
<html lang="vi">
<head>
${head({ title: page.title, description: page.meta, canonical, image: page.image, schema, ogType: 'website' })}
</head>
<body>
${header('service')}

<main>
    ${pageHero(page.title.replace(' ', ' <span>') + '</span>', page.image, ['Dịch vụ', page.eyebrow])}

    <section class="about-intro" aria-labelledby="landing-title">
        <div class="about-intro__inner">
            <div class="about-intro__image fade-in">
                <img src="../assets/images/${page.image}" alt="${page.title} tại Buôn Ma Thuột" loading="lazy">
            </div>
            <div class="about-intro__text fade-in">
                <div class="badge">${page.eyebrow}</div>
                <h2 class="section-heading__title" id="landing-title">${page.title}</h2>
                <p>${page.lead}</p>
                <ul class="footer__col-list" role="list" style="margin: 1.5rem 0 0;">
                    ${bullets}
                </ul>
                <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
                    <a class="btn btn--primary js-phone-link" href="tel:${tel}">
                        <i class="fa-solid fa-phone" aria-hidden="true"></i>
                        Gọi ${phone}
                    </a>
                    <a class="btn btn--outline js-zalo-link" href="https://zalo.me/${tel}" target="_blank" rel="noopener noreferrer">
                        Nhắn Zalo
                        <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section class="service-intro" aria-labelledby="detail-title">
        <div style="max-width: var(--max-w); margin: 0 auto;">
            <div class="section-heading section-heading--center fade-in">
                <div class="badge">Thông tin dịch vụ</div>
                <h2 class="section-heading__title" id="detail-title">Tư vấn đặt ${page.eyebrow.toLowerCase()}</h2>
                <p class="section-heading__sub">Nội dung được viết riêng cho nhu cầu tìm kiếm tại Buôn Ma Thuột và Đắk Lắk.</p>
            </div>
            <div class="features-grid">
                ${sections}
            </div>
        </div>
    </section>

    <section class="service-intro" aria-labelledby="faq-title">
        <div style="max-width: var(--max-w); margin: 0 auto;">
            <div class="section-heading section-heading--center fade-in">
                <div class="badge">Câu hỏi thường gặp</div>
                <h2 class="section-heading__title" id="faq-title">FAQ ${page.eyebrow}</h2>
            </div>
            <div class="features-grid">
                ${faqs}
            </div>
        </div>
    </section>
</main>

${footer()}
</body>
</html>
`;
}

function articleSchema(article) {
    const canonical = `${site}/pages/${article.slug}`;
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: `${site}/` },
                    { '@type': 'ListItem', position: 2, name: 'Tin tức', item: `${site}/pages/news.html` },
                    { '@type': 'ListItem', position: 3, name: article.title, item: canonical }
                ]
            },
            {
                '@type': 'Article',
                headline: article.title,
                description: article.description,
                image: `${site}/assets/images/${article.image}`,
                datePublished: article.date,
                dateModified: article.date,
                author: { '@type': 'Organization', name: 'Lái Hộ BMT' },
                publisher: { '@id': `${site}/#localbusiness` },
                mainEntityOfPage: canonical,
                inLanguage: 'vi-VN'
            }
        ]
    };
}

function renderArticle(article) {
    const canonical = `${site}/pages/${article.slug}`;
    const schema = articleSchema(article);
    const body = article.paragraphs.map((paragraph, index) => `
                <p>${paragraph}</p>${index === 1 ? `
                <div style="margin: 2rem 0; display: flex; gap: 1rem; flex-wrap: wrap;">
                    <a class="btn btn--primary js-phone-link" href="tel:${tel}">
                        <i class="fa-solid fa-phone" aria-hidden="true"></i>
                        Gọi ${phone}
                    </a>
                    <a class="btn btn--outline js-zalo-link" href="https://zalo.me/${tel}" target="_blank" rel="noopener noreferrer">
                        Nhắn Zalo
                    </a>
                </div>` : ''}`).join('');

    return `<!DOCTYPE html>
<html lang="vi">
<head>
${head({ title: article.title, description: article.description, canonical, image: article.image, schema, ogType: 'article' })}
</head>
<body>
${header('news')}

<main>
    ${pageHero(article.title.replace(' ', ' <span>') + '</span>', article.image, ['Tin tức', 'Bài viết'])}

    <section class="about-intro" aria-labelledby="article-title">
        <div class="about-intro__inner">
            <div class="about-intro__image fade-in">
                <img src="../assets/images/${article.image}" alt="${article.title}" loading="lazy">
            </div>
            <article class="about-intro__text fade-in">
                <div class="badge">${article.displayDate}</div>
                <h2 class="section-heading__title" id="article-title">${article.title}</h2>
                ${body}
                <div style="margin-top: 2rem;">
                    <a class="btn btn--outline" href="./news.html">
                        <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
                        Quay lại tin tức
                    </a>
                </div>
            </article>
        </div>
    </section>
</main>

${footer()}
</body>
</html>
`;
}

function write(file, content) {
    fs.writeFileSync(path.join(root, file), content);
}

for (const page of landingPages) {
    write(`pages/${page.slug}`, renderLanding(page));
}

for (const article of articles) {
    write(`pages/${article.slug}`, renderArticle(article));
}

const sitemapUrls = [
    ['/', 'weekly', '1.0'],
    ['/pages/about.html', 'monthly', '0.7'],
    ['/pages/service.html', 'weekly', '0.9'],
    ...landingPages.map(page => [`/pages/${page.slug}`, 'weekly', '0.9']),
    ['/pages/news.html', 'weekly', '0.6'],
    ...articles.map(article => [`/pages/${article.slug}`, 'monthly', '0.55']),
    ['/pages/contact.html', 'monthly', '0.8']
];

write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(([url, changefreq, priority]) => `    <url>
        <loc>${site}${url}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
    </url>`).join('\n')}
</urlset>
`);
