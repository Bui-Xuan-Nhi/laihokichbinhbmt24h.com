'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const site = 'https://laihokichbinhbmt24h.com';
const phone = '0849 819 819';
const tel = '0849819819';
const zaloPhone = '0849 813 813';
const zaloTel = '0849813813';
const email = 'info@laihokichbinhbmt24h.com';
const lastmod = '2026-06-04';

function withBrand(title) {
    if (title.includes('0849')) return title; // đã có số điện thoại
    return `${title} - Gọi 0849 819 819`;
}

function formatMeta(description) {
    let desc = description;
    // Nếu có Zalo, thay bằng số điện thoại chính (vì title đã có)
    if (desc.includes(zaloPhone)) {
        desc = desc.replace(zaloPhone, phone);
    }
    // Nếu vẫn không có số điện thoại chính, thêm vào
    if (!desc.includes(phone)) {
        const maxLen = 155;
        const withPhone = `${desc.replace(/\.$/, '')} Gọi ${phone}.`;
        return withPhone.length > maxLen ? withPhone.substring(0, maxLen - 1) + '.' : withPhone;
    }
    return desc;
}

function heroTitle(title) {
    const parts = title.split(' - ');
    if (parts.length > 1) {
        return `${parts[0]} <span>${parts.slice(1).join(' - ')}</span>`;
    }

    const match = title.match(/^(Taxi|Thuê xe|Xe hợp đồng|Lái hộ|Tổng đài)\s+(.+)$/i);
    if (match) {
        return `${match[1]} <span>${match[2]}</span>`;
    }

    return title;
}

const landingPages = [
    {
        slug: 'taxi-buon-ma-thuot.html',
        title: 'Taxi Buôn Ma Thuột',
        meta: 'Taxi Buôn Ma Thuột đặt xe nhanh 24/7, taxi BMT, taxi sân bay, xe 4 chỗ, 7 chỗ, taxi đi huyện và xe hợp đồng Đắk Lắk.',
        image: 'taxi-7-cho.jpg',
        eyebrow: 'Taxi Buôn Ma Thuột',
        lead: 'Taxi Buôn Ma Thuột phục vụ khách cần đặt xe nhanh trong nội thành, đi sân bay, đi Buôn Đôn, đi các huyện Đắk Lắk hoặc thuê xe theo lịch trình riêng.',
        bullets: ['Đặt taxi Buôn Ma Thuột qua điện thoại hoặc Zalo', 'Có xe 4 chỗ, 7 chỗ, 9 chỗ theo nhu cầu', 'Phục vụ nội thành, sân bay và liên huyện', 'Báo giá rõ trước chuyến đi'],
        sections: [
            {
                heading: 'Đặt taxi Buôn Ma Thuột nhanh',
                text: 'Khi cần taxi Buôn Ma Thuột, khách chỉ cần gọi 0849 819 819 hoặc nhắn Zalo 0849 813 813, gửi điểm đón, điểm trả, số khách và thời gian cần đi. Tổng Đài Taxi BMT sẽ tư vấn xe phù hợp và xác nhận chuyến.'
            },
            {
                heading: 'Phục vụ nhiều tuyến phổ biến',
                text: 'Dịch vụ nhận taxi nội thành Buôn Ma Thuột, taxi sân bay Buôn Ma Thuột, taxi Buôn Ma Thuột đi sân bay, taxi Buôn Ma Thuột đi Buôn Đôn, đi Hồ Lắk, Ea Kar, Ea H\'leo và các tuyến Đắk Lắk.'
            },
            {
                heading: 'Taxi BMT rõ giá, dễ đặt',
                text: 'Khách thường tìm taxi Buôn Ma Thuột, taxi BMT, taxi bmt hoặc tổng đài taxi Buôn Ma Thuột khi cần xe nhanh. Nội dung trang này tập trung đúng nhóm từ khóa chính để Google dễ nhận diện dịch vụ.'
            }
        ],
        faqs: [
            ['Taxi Buôn Ma Thuột có hoạt động 24/7 không?', 'Có. Tổng đài nhận đặt xe cả ngày và đêm, bao gồm sáng sớm, tối muộn, cuối tuần và ngày lễ.'],
            ['Gọi taxi Buôn Ma Thuột qua số nào?', 'Bạn có thể gọi 0849 819 819 hoặc nhắn Zalo 0849 813 813 để đặt taxi Buôn Ma Thuột.']
        ]
    },
    {
        slug: 'taxi-buon-ma-thuot-24-7.html',
        title: 'Taxi Buôn Ma Thuột 24/7',
        meta: 'Taxi Buôn Ma Thuột 24/7, gọi tổng đài đặt xe nhanh, có xe 4 chỗ, 7 chỗ, taxi sân bay, đi huyện và liên tỉnh Đắk Lắk.',
        image: 'banner-hero.jpg',
        eyebrow: 'Taxi BMT 24/7',
        lead: 'Taxi Buôn Ma Thuột 24/7 phục vụ khách cần đặt xe nhanh trong nội thành, đi sân bay, đi bệnh viện, khách sạn, bến xe hoặc các huyện Đắk Lắk.',
        bullets: ['Tổng đài nhận đặt xe cả ngày và đêm', 'Có xe 4 chỗ, 7 chỗ, 9 chỗ theo nhu cầu', 'Báo giá rõ trước chuyến đi', 'Hỗ trợ gọi điện và Zalo 0849 813 813'],
        sections: [
            {
                heading: 'Đặt taxi Buôn Ma Thuột nhanh',
                text: 'Khi cần taxi Buôn Ma Thuột 24/7, khách chỉ cần gọi hotline hoặc nhắn Zalo để gửi điểm đón, điểm đến và loại xe mong muốn. Tổng Đài Taxi BMT xác nhận chuyến đi và điều tài xế phù hợp.'
            },
            {
                heading: 'Phục vụ nhiều nhu cầu di chuyển',
                text: 'Dịch vụ phù hợp cho khách đi làm, đi khám bệnh, đón người thân, đi sân bay Buôn Ma Thuột, đi Buôn Đôn, Hồ Lắk, Ea Kar, Ea H\'leo hoặc các tuyến trong tỉnh Đắk Lắk.'
            },
            {
                heading: 'Từ khóa khách thường tìm',
                text: 'Khách thường tìm taxi Buôn Ma Thuột, taxi BMT, taxi bmt, taxi Buôn Ma Thuột 24/7 hoặc tổng đài taxi Buôn Ma Thuột khi cần xe nhanh và rõ giá.'
            }
        ],
        faqs: [
            ['Taxi Buôn Ma Thuột 24/7 có nhận chuyến đêm không?', 'Có. Tổng đài hỗ trợ đặt xe buổi tối, sáng sớm, cuối tuần và ngày lễ.'],
            ['Gọi taxi BMT qua số nào?', 'Bạn có thể gọi 0849 819 819 hoặc nhắn Zalo 0849 813 813 để đặt xe nhanh tại Buôn Ma Thuột.']
        ]
    },
    {
        slug: 'taxi-bmt.html',
        title: 'Taxi BMT - Taxi Buôn Ma Thuột',
        meta: 'Taxi BMT, taxi bmt và taxi Buôn Ma Thuột 24/7. Đặt xe nhanh qua ĐT 0849 819 819, Zalo 0849 813 813, phục vụ nội thành và toàn Đắk Lắk.',
        image: 'taxi-4-cho.jpg',
        eyebrow: 'Taxi BMT',
        lead: 'Taxi BMT là cách gọi ngắn của taxi Buôn Ma Thuột, phù hợp khách cần xe nhanh, giá rõ, tài xế địa phương và hỗ trợ đặt qua điện thoại hoặc Zalo.',
        bullets: ['Phục vụ trung tâm Buôn Ma Thuột', 'Nhận đi sân bay, bệnh viện, khách sạn, bến xe', 'Có xe 4 chỗ, 7 chỗ và xe hợp đồng', 'Hotline 0849 819 819, Zalo 0849 813 813'],
        sections: [
            {
                heading: 'Taxi BMT cho khách nội thành',
                text: 'Dịch vụ taxi BMT hỗ trợ đón khách tại nhà riêng, khách sạn, quán cà phê, bệnh viện, trường học, bến xe và các khu dân cư trong TP. Buôn Ma Thuột.'
            },
            {
                heading: 'Taxi bmt đi sân bay và đi huyện',
                text: 'Ngoài tuyến nội thành, khách có thể đặt taxi bmt đi sân bay Buôn Ma Thuột, Buôn Đôn, Cư M\'gar, Krông Pắk, Ea Kar, Ea H\'leo, Hồ Lắk và các tuyến liên huyện.'
            },
            {
                heading: 'Đặt xe qua tổng đài',
                text: 'Khi gọi tổng đài, bạn nên gửi rõ điểm đón, điểm trả, số khách, hành lý và thời gian cần đi để được tư vấn xe phù hợp và báo giá trước.'
            }
        ],
        faqs: [
            ['Taxi BMT có phải taxi Buôn Ma Thuột không?', 'Có. Taxi BMT là cách gọi ngắn phổ biến của taxi Buôn Ma Thuột.'],
            ['Taxi BMT có Zalo không?', 'Có. Bạn có thể gọi 0849 819 819 hoặc nhắn Zalo 0849 813 813.']
        ]
    },
    {
        slug: 'taxi-dak-lak.html',
        title: 'Taxi Đắk Lắk - Taxi Dak Lak',
        meta: 'Taxi Đắk Lắk, taxi dak lak, taxi đak lak phục vụ Buôn Ma Thuột, sân bay, Buôn Đôn, Ea Kar, Ea H\'leo và các tuyến trong tỉnh.',
        image: 'taxi-7-cho.jpg',
        eyebrow: 'Taxi Đắk Lắk',
        lead: 'Taxi Đắk Lắk phục vụ khách cần đặt xe tại Buôn Ma Thuột và các huyện trong tỉnh, bao gồm taxi sân bay, xe 4 chỗ, 7 chỗ và xe hợp đồng.',
        bullets: ['Phục vụ TP. Buôn Ma Thuột và toàn tỉnh Đắk Lắk', 'Nhận tuyến sân bay, Buôn Đôn, Hồ Lắk, Ea Kar, Ea H\'leo', 'Có xe 4 chỗ, 7 chỗ, 9 chỗ', 'Báo giá theo hành trình trước khi đi'],
        sections: [
            {
                heading: 'Taxi Đắk Lắk đi các huyện',
                text: 'Tổng Đài Taxi BMT nhận đặt taxi Đắk Lắk cho các tuyến từ Buôn Ma Thuột đi Buôn Đôn, Cư M\'gar, Krông Pắk, Ea Kar, Ea H\'leo, Hồ Lắk và nhiều khu vực lân cận.'
            },
            {
                heading: 'Taxi dak lak và taxi đak lak',
                text: 'Một số khách tìm kiếm không dấu hoặc gõ thiếu dấu như taxi dak lak, taxi đak lak. Nội dung này giúp khách vẫn tìm đúng dịch vụ taxi Đắk Lắk, taxi Buôn Ma Thuột và tổng đài đặt xe 24/7.'
            },
            {
                heading: 'Xe phù hợp từng hành trình',
                text: 'Khách đi một mình hoặc ít hành lý có thể chọn xe 4 chỗ. Gia đình, nhóm bạn hoặc khách đi sân bay nhiều vali nên chọn xe 7 chỗ hoặc 9 chỗ để thoải mái hơn.'
            }
        ],
        faqs: [
            ['Taxi Đắk Lắk có đi liên huyện không?', 'Có. Dịch vụ nhận các tuyến trong tỉnh Đắk Lắk và một số tuyến liên tỉnh theo báo giá trước.'],
            ['Gọi taxi dak lak qua số nào?', 'Bạn có thể gọi 0849 819 819 hoặc nhắn Zalo 0849 813 813 để đặt taxi tại Buôn Ma Thuột và Đắk Lắk.']
        ]
    },
    {
        slug: 'taxi-dien-bmt.html',
        title: 'Taxi điện BMT',
        meta: 'Taxi điện BMT và dịch vụ đặt taxi Buôn Ma Thuột tiết kiệm, xe đời mới, tài xế địa phương, tư vấn xe phù hợp qua Zalo 0849 813 813.',
        image: 'taxi-4-cho.jpg',
        eyebrow: 'Taxi điện BMT',
        lead: 'Khách tìm taxi điện BMT thường cần xe sạch, tiết kiệm và di chuyển trong nội thành Buôn Ma Thuột. Tổng đài hỗ trợ tư vấn loại xe phù hợp theo từng thời điểm.',
        bullets: ['Tư vấn xe phù hợp cho chuyến đi ngắn trong nội thành', 'Hỗ trợ taxi 4 chỗ, 7 chỗ và xe đời mới', 'Phù hợp đi khách sạn, quán cà phê, bệnh viện, sân bay', 'Gọi 0849 819 819, Zalo 0849 813 813 để kiểm tra xe gần nhất'],
        sections: [
            {
                heading: 'Nhu cầu taxi điện BMT',
                text: 'Taxi điện BMT là nhóm từ khóa khách thường tìm khi muốn di chuyển tiết kiệm, sạch sẽ và êm trong thành phố. Tình trạng xe cụ thể phụ thuộc thời điểm đặt, tổng đài sẽ tư vấn lựa chọn phù hợp nhất.'
            },
            {
                heading: 'Đặt taxi nội thành Buôn Ma Thuột',
                text: 'Khách có thể đặt xe đi nội thành, sân bay, bến xe, bệnh viện, khách sạn hoặc các điểm du lịch gần Buôn Ma Thuột. Trước khi đi, tài xế xác nhận điểm đón, điểm trả và chi phí dự kiến.'
            },
            {
                heading: 'Không chỉ taxi điện',
                text: 'Ngoài nhu cầu taxi điện bmt, tổng đài còn hỗ trợ taxi 4 chỗ Buôn Ma Thuột, taxi 7 chỗ Buôn Ma Thuột, taxi sân bay Buôn Ma Thuột và xe hợp đồng Đắk Lắk.'
            }
        ],
        faqs: [
            ['Có đặt được taxi điện BMT không?', 'Bạn nên gọi hoặc nhắn Zalo để tổng đài kiểm tra xe phù hợp gần nhất tại thời điểm đặt.'],
            ['Taxi điện BMT có đi sân bay không?', 'Nếu có xe phù hợp, tổng đài sẽ tư vấn chuyến đi sân bay; trường hợp khác sẽ gợi ý xe 4 chỗ hoặc 7 chỗ thay thế.']
        ]
    },
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
                text: 'Tổng Đài Taxi BMT báo giá theo hành trình, loại xe và thời điểm đặt. Khách có thể gọi trực tiếp để được tư vấn xe gần nhất, hoặc nhắn Zalo nếu cần gửi vị trí, ảnh hành lý hay điểm đón cụ thể.'
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
        meta: 'Taxi 7 chỗ Buôn Ma Thuột phục vụ gia đình, nhóm bạn, khách du lịch, đi sân bay và tour Đắk Lắk. Gọi 0849 819 819.',
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
                text: 'Khi đặt xe, bạn chỉ cần báo số lượng khách, hành lý, điểm đón và điểm đến. Tổng Đài Taxi BMT sẽ tư vấn xe phù hợp để tránh thiếu chỗ hoặc phát sinh đổi xe sát giờ.'
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
        eyebrow: 'Taxi sân bay BMT',
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
            ['Có đặt xe từ nhà ra sân bay được không?', 'Có. Tổng Đài Taxi BMT nhận cả chiều đưa ra sân bay và chiều đón từ sân bay về.'],
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
                text: 'Với chuyến bay, khách nên đặt xe sớm để tài xế chủ động tính thời gian di chuyển, điểm đón và tình trạng giao thông. Tổng Đài Taxi BMT nhận lịch đi sân bay từ trung tâm Buôn Ma Thuột, khu dân cư, khách sạn, bệnh viện và các huyện lân cận.'
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
            ['Taxi đi sân bay có chạy 24/7 không?', 'Có. Tổng Đài Taxi BMT nhận lịch ra sân bay cả sáng sớm, đêm muộn, cuối tuần và ngày lễ.'],
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
                text: 'Giá tuyến Buôn Ma Thuột đi Buôn Đôn phụ thuộc điểm đón, điểm trả, thời gian chờ và số điểm ghé. Khách nên gửi lịch trình trước để Tổng Đài Taxi BMT báo giá rõ ràng, hạn chế phát sinh.'
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
                text: 'Khách có thể thuê theo chuyến, theo buổi, theo ngày hoặc nhiều ngày tùy nhu cầu. Với lịch trình dài, Tổng Đài Taxi BMT sẽ tư vấn thời gian xuất phát, điểm nghỉ và loại xe phù hợp.'
            },
            {
                heading: 'Cần chuẩn bị thông tin gì?',
                text: 'Khi liên hệ, bạn nên gửi ngày đi, số khách, số điểm dừng, thời gian chờ và điểm trả khách. Những thông tin này giúp báo giá chính xác và bố trí tài xế đúng lịch.'
            }
        ],
        faqs: [
            ['Thuê xe 7 chỗ có tài xế không?', 'Có. Dịch vụ thuê xe 7 chỗ của Tổng Đài Taxi BMT đi kèm tài xế địa phương.'],
            ['Có thuê xe 7 chỗ đi tỉnh được không?', 'Có. Khách có thể thuê xe đi các huyện Đắk Lắk hoặc đi tỉnh theo lịch trình báo trước.']
        ]
    },
    {
        slug: 'xe-hop-dong-bmt.html',
        title: 'Xe hợp đồng BMT',
        meta: 'Xe hợp đồng BMT, xe hợp đồng Buôn Ma Thuột có tài xế, phục vụ sân bay, công tác, du lịch, đi huyện và liên tỉnh Đắk Lắk.',
        image: 'taxi-7-cho.jpg',
        eyebrow: 'Xe hợp đồng BMT',
        lead: 'Xe hợp đồng BMT phù hợp khách cần xe riêng có tài xế tại Buôn Ma Thuột, đi công tác, đi sân bay, đi tour hoặc thuê theo lịch trình.',
        bullets: ['Xe riêng theo chuyến, theo ngày hoặc nhiều ngày', 'Có xe 4 chỗ, 7 chỗ, 9 chỗ theo nhu cầu', 'Tài xế quen tuyến Buôn Ma Thuột và Đắk Lắk', 'Báo giá theo lịch trình trước khi đi'],
        sections: [
            {
                heading: 'Xe hợp đồng BMT cho lịch trình riêng',
                text: 'Khách tìm xe hợp đồng BMT thường cần xe riêng, không ghép khách, chủ động thời gian đón trả. Dịch vụ phù hợp đi sân bay Buôn Ma Thuột, đi công tác, đi du lịch Buôn Đôn, Hồ Lắk hoặc các tuyến liên huyện Đắk Lắk.'
            },
            {
                heading: 'Xe hợp đồng Buôn Ma Thuột có tài xế',
                text: 'Tổng Đài Taxi BMT hỗ trợ xe hợp đồng Buôn Ma Thuột có tài xế địa phương, am hiểu tuyến đường và chủ động hỗ trợ lịch trình. Khách nên gửi số người, số điểm dừng và thời gian chờ để được báo giá rõ.'
            },
            {
                heading: 'Phù hợp khách cá nhân và doanh nghiệp',
                text: 'Dịch vụ xe hợp đồng BMT phù hợp gia đình, khách công tác, đoàn nhỏ, doanh nghiệp đón đối tác, đưa đón sân bay hoặc đi tỉnh theo lịch đã thống nhất.'
            }
        ],
        faqs: [
            ['Xe hợp đồng BMT có tài xế không?', 'Có. Dịch vụ xe hợp đồng BMT đi kèm tài xế địa phương, nhận lịch theo chuyến hoặc theo ngày.'],
            ['Xe hợp đồng Buôn Ma Thuột có đi tỉnh không?', 'Có. Khách có thể đặt xe đi các huyện Đắk Lắk hoặc tuyến liên tỉnh theo báo giá trước.']
        ]
    },
    {
        slug: 'thue-xe-co-tai-xe-buon-ma-thuot.html',
        title: 'Thuê xe có tài xế Buôn Ma Thuột',
        meta: 'Thuê xe có tài xế Buôn Ma Thuột, xe 4 chỗ, 7 chỗ, 9 chỗ phục vụ sân bay, công tác, du lịch và đi huyện Đắk Lắk.',
        image: 'taxi-4-cho.jpg',
        eyebrow: 'Thuê xe có tài xế',
        lead: 'Thuê xe có tài xế Buôn Ma Thuột giúp khách chủ động lịch trình mà không cần tự lái, phù hợp đi sân bay, đi tour, công tác hoặc đưa đón gia đình.',
        bullets: ['Có tài xế địa phương quen đường', 'Nhận lịch nội thành, sân bay, đi huyện và đi tỉnh', 'Xe 4 chỗ, 7 chỗ, 9 chỗ theo số khách', 'Tư vấn lịch trình và báo giá rõ trước chuyến đi'],
        sections: [
            {
                heading: 'Khi nào nên thuê xe có tài xế?',
                text: 'Bạn nên thuê xe có tài xế Buôn Ma Thuột khi cần di chuyển nhiều điểm, đi cùng gia đình, có hành lý, không quen đường hoặc muốn tài xế địa phương hỗ trợ lịch trình.'
            },
            {
                heading: 'Thuê xe theo chuyến hoặc theo ngày',
                text: 'Khách có thể thuê xe theo chuyến ngắn, theo buổi, theo ngày hoặc nhiều ngày. Với lịch trình đi Buôn Đôn, Hồ Lắk, Ea Kar, Ea H\'leo hoặc liên tỉnh, tổng đài sẽ tư vấn loại xe phù hợp.'
            },
            {
                heading: 'Thông tin cần gửi khi đặt xe',
                text: 'Khi đặt xe, khách nên gửi ngày giờ đi, điểm đón, điểm trả, số khách, hành lý và các điểm ghé. Thông tin rõ giúp báo giá chính xác và bố trí tài xế đúng lịch.'
            }
        ],
        faqs: [
            ['Thuê xe có tài xế Buôn Ma Thuột giá thế nào?', 'Giá phụ thuộc loại xe, tuyến đi, thời gian chờ và số ngày thuê. Khách nên gửi lịch trình để được báo giá trước.'],
            ['Có thuê xe 7 chỗ có tài xế không?', 'Có. Tổng Đài Taxi BMT hỗ trợ xe 4 chỗ, 7 chỗ và 9 chỗ có tài xế tại Buôn Ma Thuột.']
        ]
    },
    {
        slug: 'taxi-dem-buon-ma-thuot.html',
        title: 'Taxi đêm Buôn Ma Thuột',
        meta: 'Taxi đêm Buôn Ma Thuột 24/7, đặt xe buổi tối, sáng sớm, đi sân bay, bệnh viện, khách sạn và các tuyến Đắk Lắk.',
        image: 'banner-hero.jpg',
        eyebrow: 'Taxi đêm BMT',
        lead: 'Taxi đêm Buôn Ma Thuột phục vụ khách cần xe buổi tối, sáng sớm, sau tiệc, đi sân bay hoặc về nhà an toàn trong khu vực Đắk Lắk.',
        bullets: ['Nhận đặt xe buổi tối và sáng sớm', 'Phù hợp đi sân bay, bệnh viện, khách sạn, bến xe', 'Có thể gọi điện hoặc nhắn Zalo gửi vị trí', 'Tài xế xác nhận điểm đón trước chuyến đi'],
        sections: [
            {
                heading: 'Đặt taxi đêm tại Buôn Ma Thuột',
                text: 'Khách tìm taxi đêm Buôn Ma Thuột thường cần xe nhanh vào khung giờ ít phương tiện. Tổng Đài Taxi BMT hỗ trợ nhận thông tin điểm đón, điểm trả và điều xe phù hợp theo khu vực.'
            },
            {
                heading: 'Các nhu cầu thường gặp ban đêm',
                text: 'Dịch vụ phù hợp khi cần đi sân bay sáng sớm, về nhà sau tiệc, đón người thân, đi bệnh viện, khách sạn, bến xe hoặc di chuyển giữa các khu vực trong TP. Buôn Ma Thuột.'
            },
            {
                heading: 'Nên gửi vị trí qua Zalo',
                text: 'Vào buổi tối, khách nên gửi định vị qua Zalo 0849 813 813 để tài xế dễ tìm điểm đón. Nếu cần gọi nhanh, hotline đặt taxi là 0849 819 819.'
            }
        ],
        faqs: [
            ['Taxi đêm Buôn Ma Thuột có hoạt động 24/7 không?', 'Có. Tổng Đài Taxi BMT hỗ trợ đặt xe buổi tối, đêm muộn và sáng sớm.'],
            ['Taxi đêm có đi sân bay không?', 'Có. Khách nên đặt trước nếu cần ra sân bay vào sáng sớm hoặc đêm muộn.']
        ]
    },
    {
        slug: 'taxi-benh-vien-buon-ma-thuot.html',
        title: 'Taxi bệnh viện Buôn Ma Thuột',
        meta: 'Taxi bệnh viện Buôn Ma Thuột, đặt xe đi khám, đưa đón người nhà, đi bệnh viện vùng Tây Nguyên, bệnh viện TP. Buôn Ma Thuột.',
        image: 'taxi-4-cho.jpg',
        eyebrow: 'Taxi bệnh viện',
        lead: 'Taxi bệnh viện Buôn Ma Thuột phù hợp khách cần đi khám, đưa đón người nhà, đi bệnh viện sáng sớm hoặc chuyển điểm trong nội thành.',
        bullets: ['Đón tại nhà, khách sạn hoặc bệnh viện', 'Phù hợp người lớn tuổi, gia đình và người có hành lý', 'Có xe 4 chỗ, 7 chỗ theo nhu cầu', 'Nhận đặt trước giờ khám hoặc giờ ra viện'],
        sections: [
            {
                heading: 'Đặt taxi đi bệnh viện Buôn Ma Thuột',
                text: 'Khách có thể đặt taxi đi bệnh viện Buôn Ma Thuột từ nhà riêng, khách sạn, bến xe hoặc sân bay. Tài xế xác nhận điểm đón, cổng bệnh viện và thời gian cần có mặt.'
            },
            {
                heading: 'Phù hợp đi khám và đưa đón người nhà',
                text: 'Dịch vụ hỗ trợ khách đi khám bệnh, đón người nhà ra viện, đưa người lớn tuổi hoặc gia đình có nhiều hành lý. Xe 7 chỗ phù hợp nếu cần không gian rộng hơn.'
            },
            {
                heading: 'Nên đặt trước vào giờ cao điểm',
                text: 'Nếu đi khám buổi sáng, khách nên đặt xe trước để tránh trễ giờ. Khi đặt, hãy gửi rõ bệnh viện, cổng đón trả và số người đi cùng.'
            }
        ],
        faqs: [
            ['Taxi bệnh viện Buôn Ma Thuột có đón sáng sớm không?', 'Có. Khách nên đặt trước nếu cần đi khám vào buổi sáng hoặc giờ cao điểm.'],
            ['Có xe 7 chỗ đi bệnh viện không?', 'Có. Tổng Đài Taxi BMT hỗ trợ xe 4 chỗ và 7 chỗ theo số khách, hành lý và tình trạng di chuyển.']
        ]
    },
    {
        slug: 'taxi-ben-xe-buon-ma-thuot.html',
        title: 'Taxi bến xe Buôn Ma Thuột',
        meta: 'Taxi bến xe Buôn Ma Thuột, đón trả khách tại bến xe, khách sạn, sân bay, nội thành và các tuyến huyện Đắk Lắk.',
        image: 'taxi-7-cho.jpg',
        eyebrow: 'Taxi bến xe BMT',
        lead: 'Taxi bến xe Buôn Ma Thuột phục vụ khách cần đón trả tại bến xe, đi khách sạn, sân bay, bệnh viện hoặc các điểm trong thành phố.',
        bullets: ['Đón khách tại bến xe Buôn Ma Thuột', 'Đi khách sạn, nhà riêng, bệnh viện, sân bay', 'Có xe 4 chỗ và 7 chỗ cho khách nhiều hành lý', 'Gửi vị trí qua Zalo để tài xế dễ đón'],
        sections: [
            {
                heading: 'Đón taxi tại bến xe Buôn Ma Thuột',
                text: 'Khách đến bến xe Buôn Ma Thuột có thể gọi hotline hoặc nhắn Zalo để tài xế xác nhận điểm đón. Nếu có nhiều hành lý, nên báo trước để chọn xe phù hợp.'
            },
            {
                heading: 'Tuyến đi phổ biến từ bến xe',
                text: 'Các tuyến thường gặp gồm bến xe về trung tâm thành phố, khách sạn, bệnh viện, sân bay Buôn Ma Thuột, Buôn Đôn, Cư M\'gar, Krông Pắk và các huyện Đắk Lắk.'
            },
            {
                heading: 'Đặt xe nhanh khi vừa đến bến',
                text: 'Để tiết kiệm thời gian, khách nên gửi vị trí hoặc tên cổng bến xe qua Zalo 0849 813 813. Nếu cần gọi nhanh, hotline đặt taxi là 0849 819 819.'
            }
        ],
        faqs: [
            ['Taxi bến xe Buôn Ma Thuột có đón nhiều hành lý không?', 'Có. Khách nên báo số vali hoặc kiện hàng để được tư vấn xe 4 chỗ, 7 chỗ hoặc 9 chỗ.'],
            ['Có đi từ bến xe ra sân bay không?', 'Có. Dịch vụ nhận tuyến bến xe Buôn Ma Thuột đi sân bay và chiều ngược lại.']
        ]
    },
    {
        slug: 'taxi-buon-ma-thuot-di-ho-lak.html',
        title: 'Taxi Buôn Ma Thuột đi Hồ Lắk',
        meta: 'Taxi Buôn Ma Thuột đi Hồ Lắk, xe riêng 4 chỗ, 7 chỗ, tài xế địa phương, phù hợp gia đình, du lịch và đi về trong ngày.',
        image: 'taxi-7-cho.jpg',
        eyebrow: 'Taxi đi Hồ Lắk',
        lead: 'Taxi Buôn Ma Thuột đi Hồ Lắk phù hợp khách du lịch, gia đình và nhóm bạn muốn đi xe riêng, chủ động thời gian tham quan.',
        bullets: ['Xe riêng đi Hồ Lắk theo lịch trình', 'Có xe 4 chỗ, 7 chỗ, 9 chỗ', 'Có thể đi về trong ngày hoặc kết hợp nhiều điểm', 'Báo giá theo điểm đón, điểm trả và thời gian chờ'],
        sections: [
            {
                heading: 'Tuyến Buôn Ma Thuột đi Hồ Lắk',
                text: 'Hồ Lắk là tuyến du lịch được nhiều khách tìm khi đến Đắk Lắk. Đi taxi riêng giúp khách chủ động giờ đi, giờ về, điểm dừng và thời gian tham quan.'
            },
            {
                heading: 'Nên chọn xe nào?',
                text: 'Nhóm ít người có thể chọn xe 4 chỗ. Gia đình hoặc nhóm có hành lý nên chọn xe 7 chỗ để thoải mái hơn trong hành trình Buôn Ma Thuột đi Hồ Lắk.'
            },
            {
                heading: 'Báo giá trước chuyến đi',
                text: 'Giá tuyến phụ thuộc điểm đón, điểm trả, thời gian chờ và số điểm ghé. Khách nên gửi lịch trình để Tổng Đài Taxi BMT báo giá rõ trước khi đi.'
            }
        ],
        faqs: [
            ['Taxi Buôn Ma Thuột đi Hồ Lắk có đi về trong ngày không?', 'Có. Khách có thể đặt xe đi về trong ngày hoặc thuê xe theo lịch trình riêng.'],
            ['Có xe 7 chỗ đi Hồ Lắk không?', 'Có. Dịch vụ hỗ trợ xe 4 chỗ, 7 chỗ và 9 chỗ theo số khách.']
        ]
    },
    {
        slug: 'taxi-buon-ma-thuot-di-ea-kar.html',
        title: 'Taxi Buôn Ma Thuột đi Ea Kar',
        meta: 'Taxi Buôn Ma Thuột đi Ea Kar, xe riêng 4 chỗ, 7 chỗ, nhận đặt trước, báo giá rõ, phục vụ công việc, gia đình và liên huyện.',
        image: 'taxi-4-cho.jpg',
        eyebrow: 'Taxi đi Ea Kar',
        lead: 'Taxi Buôn Ma Thuột đi Ea Kar phục vụ khách cần xe riêng liên huyện, đi công việc, thăm gia đình, đưa đón sân bay hoặc lịch trình cá nhân.',
        bullets: ['Nhận tuyến Buôn Ma Thuột - Ea Kar', 'Có xe 4 chỗ, 7 chỗ theo nhu cầu', 'Tài xế quen tuyến Đắk Lắk', 'Báo giá trước, xác nhận lịch rõ ràng'],
        sections: [
            {
                heading: 'Đặt taxi đi Ea Kar',
                text: 'Khách có thể đặt taxi Buôn Ma Thuột đi Ea Kar theo một chiều, hai chiều hoặc chờ theo lịch trình. Tài xế xác nhận điểm đón, điểm trả và thời gian đi trước chuyến.'
            },
            {
                heading: 'Phù hợp nhiều mục đích',
                text: 'Tuyến này phù hợp đi công tác, thăm gia đình, đi khám bệnh, đưa đón sân bay hoặc di chuyển giữa các huyện trong tỉnh Đắk Lắk.'
            },
            {
                heading: 'Thông tin cần gửi',
                text: 'Khi đặt xe, khách nên gửi xã/phường cần đón trả, số khách, hành lý và thời gian cần đi để tổng đài tư vấn xe phù hợp.'
            }
        ],
        faqs: [
            ['Taxi Buôn Ma Thuột đi Ea Kar có nhận đặt trước không?', 'Có. Khách nên đặt trước nếu cần đi sáng sớm, cuối tuần hoặc có lịch cố định.'],
            ['Có xe 7 chỗ đi Ea Kar không?', 'Có. Tổng Đài Taxi BMT hỗ trợ xe 4 chỗ và 7 chỗ theo số khách, hành lý và lịch trình.']
        ]
    },
    {
        slug: 'tong-dai-taxi-buon-ma-thuot-24h.html',
        title: 'Tổng đài Taxi Buôn Ma Thuột 24h',
        meta: 'Tổng đài taxi Buôn Ma Thuột 24h, đặt xe nhanh, tài xế địa phương, phục vụ nội thành, sân bay và các tuyến Đắk Lắk.',
        image: 'banner-hero.jpg',
        eyebrow: 'Tổng đài Taxi BMT 24h',
        lead: 'Tổng đài taxi Buôn Ma Thuột 24h hỗ trợ khách đặt xe nhanh trong nội thành, đi sân bay, đi huyện và các lịch trình cần tài xế địa phương.',
        bullets: ['Hỗ trợ gọi taxi 24/7', 'Phù hợp đi sân bay, bệnh viện, khách sạn, công việc và du lịch', 'Tài xế xác nhận điểm đón và điểm trả rõ ràng', 'Ưu tiên an toàn, đúng giờ và minh bạch giá'],
        sections: [
            {
                heading: 'Khi nào nên gọi tổng đài taxi?',
                text: 'Bạn nên gọi tổng đài taxi khi cần xe nhanh, cần báo giá rõ trước chuyến đi, cần tài xế quen đường hoặc cần đặt xe cho lịch trình cố định trong ngày.'
            },
            {
                heading: 'Quy trình đặt xe',
                text: 'Khách gọi hotline hoặc nhắn Zalo, gửi điểm đón, điểm trả, loại xe và thời gian cần đi. Tổng Đài Taxi BMT xác nhận lại thông tin, báo giá và điều tài xế phù hợp.'
            },
            {
                heading: 'Ưu tiên an toàn và minh bạch',
                text: 'Tài xế xác nhận hành trình trước khi nhận chuyến. Khách nên thống nhất điểm đón, điểm trả, thời gian chờ và chi phí để quá trình di chuyển rõ ràng, an toàn.'
            }
        ],
        faqs: [
            ['Tổng đài taxi có hoạt động ban đêm không?', 'Có. Tổng Đài Taxi BMT nhận đặt taxi 24h, bao gồm buổi tối, cuối tuần và ngày lễ.'],
            ['Có cần đặt xe trước không?', 'Nếu cần đi sân bay, đi xa hoặc đi vào giờ cao điểm, bạn nên đặt trước để được bố trí xe nhanh hơn.']
        ]
    },
    {
        slug: 'lai-ho-buon-ma-thuot-24h.html',
        title: 'Lái hộ Buôn Ma Thuột 24h',
        meta: 'Lái hộ Buôn Ma Thuột 24h, hỗ trợ tài xế lái xe thay sau tiệc, tiếp khách hoặc khi không tiện tự lái. Gọi 0849 819 819, Zalo 0849 813 813.',
        image: 'banner-hero.jpg',
        eyebrow: 'Lái hộ Buôn Ma Thuột',
        lead: 'Dịch vụ lái hộ Buôn Ma Thuột 24h phù hợp khách cần tài xế lái xe thay để đưa người và xe về an toàn sau tiệc, công việc hoặc hành trình dài.',
        bullets: ['Hỗ trợ tài xế lái hộ 24/7', 'Phù hợp sau tiệc, tiếp khách hoặc khi mệt', 'Xác nhận điểm đón, điểm trả rõ ràng', 'Có thể đặt qua điện thoại hoặc Zalo'],
        sections: [
            {
                heading: 'Khi nào nên gọi lái hộ?',
                text: 'Bạn nên gọi lái hộ Buôn Ma Thuột 24h khi đã dùng rượu bia, cảm thấy mệt, không quen đường ban đêm hoặc cần người hỗ trợ đưa xe về nhà an toàn.'
            },
            {
                heading: 'Quy trình đặt lái hộ',
                text: 'Khách gọi hotline hoặc nhắn Zalo, gửi điểm đón, điểm trả, loại xe và thời gian cần tài xế. Tổng Đài Taxi BMT xác nhận thông tin, báo giá và bố trí tài xế phù hợp.'
            },
            {
                heading: 'Lái hộ và taxi BMT',
                text: 'Ngoài taxi BMT, taxi Buôn Ma Thuột 24/7 và taxi sân bay, tổng đài vẫn giữ nội dung lái hộ Buôn Ma Thuột 24h để phục vụ nhóm khách cần tài xế lái xe thay.'
            }
        ],
        faqs: [
            ['Lái hộ Buôn Ma Thuột 24h có nhận ban đêm không?', 'Có. Khách nên gọi trước để tổng đài kiểm tra tài xế phù hợp theo khu vực và thời điểm.'],
            ['Lái hộ khác taxi như thế nào?', 'Taxi là xe có tài xế chở khách; lái hộ là tài xế lái chính xe của khách theo hành trình đã thống nhất.']
        ]
    }
];

const bmtAreaPages = [
    {
        slug: 'taxi-phuong-buon-ma-thuot.html',
        area: 'phường Buôn Ma Thuột',
        short: 'Phường Buôn Ma Thuột',
        image: 'banner-hero.jpg',
        note: 'Phù hợp khách ở khu vực trung tâm sau sắp xếp hành chính, gồm nhiều khu dân cư, cơ quan, khách sạn và điểm thương mại lớn.',
        nearby: 'Trường Chinh, Lê Duẩn, Nguyễn Tất Thành, trung tâm hành chính và các tuyến nội thành'
    },
    {
        slug: 'taxi-tan-an-buon-ma-thuot.html',
        area: 'khu vực Tân An Buôn Ma Thuột',
        short: 'Tân An',
        image: 'taxi-4-cho.jpg',
        note: 'Tân An là khu vực có nhu cầu taxi nội thành, đi sân bay, đi bệnh viện và đặt xe ban đêm khá thường xuyên.',
        nearby: 'Tân An, các khu dân cư phía Bắc thành phố, tuyến đi sân bay và trung tâm Buôn Ma Thuột'
    },
    {
        slug: 'taxi-tan-loi-buon-ma-thuot.html',
        area: 'khu vực Tân Lợi Buôn Ma Thuột',
        short: 'Tân Lợi',
        image: 'taxi-7-cho.jpg',
        note: 'Tân Lợi là khu vực trung tâm, gần nhiều cơ quan, khách sạn, quán cà phê và tuyến đường lớn nên khách thường cần xe nhanh.',
        nearby: 'Tân Lợi, Trường Chinh, Nguyễn Tất Thành, trung tâm Buôn Ma Thuột'
    },
    {
        slug: 'taxi-ea-tam-buon-ma-thuot.html',
        area: 'khu vực Ea Tam Buôn Ma Thuột',
        short: 'Ea Tam',
        image: 'banner-about.jpg',
        note: 'Ea Tam có nhiều khu dân cư, trường học và điểm dịch vụ; phù hợp đặt taxi đi làm, đi học, đi khám bệnh hoặc đi sân bay.',
        nearby: 'Ea Tam, Lê Duẩn, khu dân cư phía Nam trung tâm và tuyến đi Hòa Thắng'
    },
    {
        slug: 'taxi-tan-hoa-buon-ma-thuot.html',
        area: 'khu vực Tân Hòa Buôn Ma Thuột',
        short: 'Tân Hòa',
        image: 'taxi-4-cho.jpg',
        note: 'Tân Hòa nằm gần các tuyến ra vào thành phố, phù hợp khách cần taxi đi bến xe, sân bay, nội thành hoặc đi huyện.',
        nearby: 'Tân Hòa, bến xe, các tuyến kết nối nội thành và ngoại thành Buôn Ma Thuột'
    },
    {
        slug: 'taxi-thanh-nhat-buon-ma-thuot.html',
        area: 'khu vực Thành Nhất Buôn Ma Thuột',
        short: 'Thành Nhất',
        image: 'taxi-7-cho.jpg',
        note: 'Thành Nhất phù hợp các chuyến taxi nội thành, đi sân bay, đi bệnh viện và xe gia đình 7 chỗ cho khách có nhiều hành lý.',
        nearby: 'Thành Nhất, khu dân cư phía Tây thành phố, tuyến đi Buôn Đôn'
    },
    {
        slug: 'taxi-ea-tu-buon-ma-thuot.html',
        area: 'khu vực Ea Tu Buôn Ma Thuột',
        short: 'Ea Tu',
        image: 'banner-service.jpg',
        note: 'Ea Tu có nhu cầu taxi đi trung tâm, đi sân bay, đi chợ, đi bệnh viện và các tuyến liên huyện trong tỉnh Đắk Lắk.',
        nearby: 'Ea Tu, khu Đông Buôn Ma Thuột, tuyến đi Ea Kar và Quốc lộ 26'
    },
    {
        slug: 'taxi-hoa-thang-buon-ma-thuot.html',
        area: 'khu vực Hòa Thắng Buôn Ma Thuột',
        short: 'Hòa Thắng',
        image: 'banner-service.jpg',
        note: 'Hòa Thắng gần sân bay Buôn Ma Thuột nên phù hợp khách cần taxi sân bay, đưa đón người thân hoặc đặt xe về trung tâm.',
        nearby: 'Hòa Thắng, sân bay Buôn Ma Thuột, tuyến vào trung tâm thành phố'
    },
    {
        slug: 'taxi-hoa-phu-buon-ma-thuot.html',
        area: 'khu vực Hòa Phú Buôn Ma Thuột',
        short: 'Hòa Phú',
        image: 'taxi-9-cho.jpg',
        note: 'Hòa Phú phù hợp khách đặt xe đi trung tâm, đi công việc, thuê xe 7 chỗ hoặc xe hợp đồng theo ngày.',
        nearby: 'Hòa Phú, tuyến phía Nam Buôn Ma Thuột, các khu dân cư và khu công nghiệp lân cận'
    },
    {
        slug: 'taxi-hoa-xuan-buon-ma-thuot.html',
        area: 'khu vực Hòa Xuân Buôn Ma Thuột',
        short: 'Hòa Xuân',
        image: 'taxi-7-cho.jpg',
        note: 'Hòa Xuân thường có nhu cầu taxi về trung tâm, đi sân bay, đi huyện hoặc thuê xe cho gia đình và nhóm nhỏ.',
        nearby: 'Hòa Xuân, phía Nam Buôn Ma Thuột, các tuyến về trung tâm và Quốc lộ 27'
    },
    {
        slug: 'taxi-hoa-khanh-buon-ma-thuot.html',
        area: 'khu vực Hòa Khánh Buôn Ma Thuột',
        short: 'Hòa Khánh',
        image: 'taxi-4-cho.jpg',
        note: 'Hòa Khánh phù hợp khách cần taxi 4 chỗ, 7 chỗ, xe đi sân bay và xe gia đình theo lịch trình riêng.',
        nearby: 'Hòa Khánh, tuyến phía Nam thành phố và các khu vực giáp Hòa Phú, Hòa Xuân'
    },
    {
        slug: 'taxi-cu-ebur-buon-ma-thuot.html',
        area: 'khu vực Cư Êbur Buôn Ma Thuột',
        short: 'Cư Êbur',
        image: 'taxi-7-cho.jpg',
        note: 'Cư Êbur là khu vực cửa ngõ phía Bắc, phù hợp đặt taxi đi trung tâm, đi sân bay, đi Buôn Đôn hoặc đi các huyện lân cận.',
        nearby: 'Cư Êbur, phía Bắc Buôn Ma Thuột, tuyến đi Buôn Đôn và các khu dân cư lân cận'
    }
];

landingPages.push(...bmtAreaPages.map(createAreaLanding));

function createAreaLanding(areaPage) {
    return {
        slug: areaPage.slug,
        title: `Taxi ${areaPage.short} Buôn Ma Thuột`,
        meta: `Taxi ${areaPage.short} Buôn Ma Thuột 24/7, đặt xe nhanh tại ${areaPage.area}, taxi 4 chỗ, 7 chỗ, đi sân bay và nội thành.`,
        image: areaPage.image,
        eyebrow: `Taxi ${areaPage.short}`,
        lead: `Dịch vụ taxi tại ${areaPage.area} hỗ trợ đặt xe nhanh qua hotline ${phone} hoặc Zalo ${zaloPhone}, phục vụ nội thành, sân bay và các tuyến Đắk Lắk.`,
        bullets: [
            `Đón khách tại ${areaPage.area}`,
            'Có taxi 4 chỗ, 7 chỗ theo số khách và hành lý',
            'Nhận đi sân bay Buôn Ma Thuột, bệnh viện, bến xe và trung tâm',
            `Gọi ${phone} hoặc nhắn Zalo ${zaloPhone} để đặt xe`
        ],
        sections: [
            {
                heading: `Đặt taxi tại ${areaPage.short}`,
                text: `${areaPage.note} Khi đặt xe, khách nên gửi điểm đón cụ thể, điểm đến, số khách và thời gian cần đi để tổng đài bố trí xe phù hợp.`
            },
            {
                heading: 'Các tuyến thường gặp',
                text: `Từ ${areaPage.area}, khách thường đặt taxi đi trung tâm Buôn Ma Thuột, sân bay Buôn Ma Thuột, bệnh viện, bến xe, khách sạn, quán cà phê hoặc các tuyến đi Buôn Đôn, Hồ Lắk, Ea Kar và các huyện Đắk Lắk.`
            },
            {
                heading: 'Khu vực đón gần bạn',
                text: `Tổng Đài Taxi BMT hỗ trợ đón tại ${areaPage.nearby}. Nếu vị trí khó tìm, khách có thể gửi định vị qua Zalo ${zaloPhone} để tài xế đến đúng điểm hẹn.`
            }
        ],
        faqs: [
            [`Taxi ${areaPage.short} có hoạt động 24/7 không?`, `Có. Tổng Đài Taxi BMT nhận đặt taxi tại ${areaPage.area} cả ngày và đêm, bao gồm sáng sớm, tối muộn, cuối tuần và ngày lễ.`],
            [`Gọi taxi ${areaPage.short} qua số nào?`, `Bạn gọi ${phone} để đặt xe nhanh hoặc nhắn Zalo ${zaloPhone} để gửi vị trí đón và điểm đến.`],
            [`Taxi ${areaPage.short} có đi sân bay không?`, 'Có. Dịch vụ nhận đưa đón sân bay Buôn Ma Thuột bằng xe 4 chỗ, 7 chỗ hoặc xe theo lịch trình riêng.']
        ]
    };
}

const articles = [
    {
        slug: 'uu-dai-don-san-bay-buon-ma-thuot.html',
        title: 'Ưu đãi đón sân bay Buôn Ma Thuột khi đặt trước',
        description: 'Tổng Đài Taxi BMT triển khai ưu đãi cho khách đặt trước chuyến đưa đón sân bay Buôn Ma Thuột qua hotline hoặc Zalo.',
        date: '2026-03-15',
        displayDate: '15 tháng 3, 2026',
        image: 'taxi-4-cho.jpg',
        paragraphs: [
            'Với các chuyến đi sân bay, thời gian là yếu tố quan trọng nhất. Tổng Đài Taxi BMT khuyến khích khách đặt trước để tài xế chủ động lịch trình, kiểm tra điểm đón và chọn loại xe phù hợp với số khách.',
            'Ưu đãi áp dụng cho khách đặt trước qua hotline hoặc Zalo, đặc biệt với các khung giờ sáng sớm, tối muộn hoặc cuối tuần. Khi đặt, khách nên gửi giờ bay, điểm đón, số khách và số lượng hành lý.',
            'Dịch vụ có xe 4 chỗ, 7 chỗ và 9 chỗ. Khách đi một mình hoặc ít hành lý có thể chọn xe 4 chỗ; gia đình hoặc nhóm bạn nên chọn xe 7 chỗ để có không gian thoải mái hơn.',
            'Để đặt xe sân bay Buôn Ma Thuột, gọi 0849 819 819 hoặc nhắn Zalo 0849 813 813. Tài xế sẽ xác nhận lại giá và thời gian trước chuyến đi.'
        ]
    },
    {
        slug: 'mo-rong-ea-hleo-ea-kar.html',
        title: 'Tổng Đài Taxi BMT mở rộng phục vụ Ea H\'leo và Ea Kar',
        description: 'Từ tháng 3/2026, Tổng Đài Taxi BMT mở rộng dịch vụ taxi 24/7 đến Ea H\'leo, Ea Kar và nhiều khu vực tại Đắk Lắk.',
        date: '2026-03-02',
        displayDate: '2 tháng 3, 2026',
        image: 'taxi-7-cho.jpg',
        paragraphs: [
            'Nhu cầu di chuyển giữa TP. Buôn Ma Thuột và các huyện trong tỉnh Đắk Lắk ngày càng tăng, đặc biệt với khách đi công tác, khám bệnh, sân bay và du lịch gia đình.',
            'Từ tháng 3/2026, Tổng Đài Taxi BMT mở rộng phạm vi phục vụ đến Ea H\'leo và Ea Kar. Khách tại các khu vực này có thể đặt xe theo chuyến, đặt xe chiều về hoặc đặt xe trọn gói theo lịch trình.',
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
            'Trước khi đi, bạn nên thống nhất số điểm dừng, thời gian chờ và điểm trả khách. Tổng Đài Taxi BMT sẽ báo giá theo lịch trình để khách dễ kiểm soát chi phí.'
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
            'Tổng Đài Taxi BMT hỗ trợ tư vấn loại xe và tuyến đi phù hợp qua hotline 0849 819 819 hoặc Zalo 0849 813 813.'
        ]
    },
    {
        slug: 'xe-hop-dong-doanh-nghiep-dak-lak.html',
        title: 'Xe hợp đồng doanh nghiệp Đắk Lắk',
        description: 'Tổng Đài Taxi BMT cung cấp xe hợp đồng theo tháng cho doanh nghiệp tại Buôn Ma Thuột và Đắk Lắk, tài xế ổn định, lịch trình linh hoạt.',
        date: '2026-02-01',
        displayDate: '1 tháng 2, 2026',
        image: 'news-hop-dong.jpg',
        paragraphs: [
            'Doanh nghiệp tại Buôn Ma Thuột thường cần xe ổn định cho lịch trình đưa đón nhân sự, đối tác, chuyên gia hoặc khách hàng. Dịch vụ xe hợp đồng giúp kiểm soát chi phí tốt hơn so với đặt từng chuyến rời.',
            'Tổng Đài Taxi BMT nhận xe hợp đồng theo ngày, theo tuần hoặc theo tháng. Khách có thể chọn xe 4 chỗ, 7 chỗ hoặc 9 chỗ tùy số lượng người và tần suất di chuyển.',
            'Ưu điểm của xe hợp đồng là tài xế nắm lịch trình quen thuộc, chủ động giờ giấc và có thể hỗ trợ nhiều điểm dừng trong cùng một ngày làm việc.',
            'Doanh nghiệp cần báo trước nhu cầu sử dụng, khung giờ, tuyến thường đi và yêu cầu hóa đơn/chứng từ nếu có để được tư vấn phương án phù hợp.'
        ]
    },
    {
        slug: 'taxi-duoc-yeu-thich-dak-lak-2025.html',
        title: 'Tổng Đài Taxi BMT được khách hàng Đắk Lắk tin chọn trong năm 2025',
        description: 'Nhìn lại năm 2025 của Tổng Đài Taxi BMT với các tiêu chí được khách hàng đánh giá cao: đúng giờ, rõ giá, tài xế thân thiện.',
        date: '2026-01-15',
        displayDate: '15 tháng 1, 2026',
        image: 'banner-about.jpg',
        paragraphs: [
            'Năm 2025 ghi nhận nhu cầu đặt taxi và xe hợp đồng tại Buôn Ma Thuột tăng mạnh. Khách hàng ưu tiên các đơn vị có phản hồi nhanh, giá rõ ràng và tài xế am hiểu địa phương.',
            'Tổng Đài Taxi BMT tập trung vào ba tiêu chí chính: đúng giờ, an toàn và minh bạch chi phí. Đây là những yếu tố ảnh hưởng trực tiếp đến trải nghiệm của khách đi sân bay, đi khám bệnh, công tác hoặc du lịch.',
            'Bên cạnh nội thành Buôn Ma Thuột, dịch vụ cũng mở rộng đến nhiều khu vực trong tỉnh Đắk Lắk, giúp khách ở huyện có thêm lựa chọn đặt xe chủ động hơn.',
            'Trong thời gian tới, Tổng Đài Taxi BMT tiếp tục tối ưu quy trình đặt xe qua hotline và Zalo, đồng thời phát triển thêm nội dung hướng dẫn di chuyển để khách dễ lập kế hoạch hơn.'
        ]
    }
];

function escapeJson(value) {
    return JSON.stringify(value);
}

function head({ title, description, canonical, image, schema, ogType = 'website' }) {
    const formattedDescription = formatMeta(description);
    return `    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${formattedDescription}">
    <link rel="canonical" href="${canonical}">
    <meta property="og:locale" content="vi_VN">
    <meta property="og:type" content="${ogType}">
    <meta property="og:site_name" content="Tổng Đài Taxi BMT">
    <meta property="og:title" content="${withBrand(title)}">
    <meta property="og:description" content="${formattedDescription}">
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
            <span class="header__logo-text">Taxi <span>BMT</span></span>
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
            Taxi <span>BMT</span>
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
        <h2 class="cta-banner__title">Cần đặt xe ngay?<br><span>Gọi Tổng Đài Taxi BMT 24/7</span></h2>
        <p class="cta-banner__desc">Phục vụ Buôn Ma Thuột và toàn tỉnh Đắk Lắk</p>
        <div class="cta-banner__btns">
            <a class="btn btn--primary btn--lg js-phone-link" href="tel:${tel}">
                <i class="fa-solid fa-phone" aria-hidden="true"></i>
                <span class="js-phone-text">${phone}</span>
            </a>
            <a class="btn btn--outline-white btn--lg js-zalo-link" href="https://zalo.me/${zaloTel}" target="_blank" rel="noopener noreferrer">
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
                    <span class="header__logo-text">Taxi <span>BMT</span></span>
                </a>
                <p class="footer__brand-desc">Dịch vụ taxi Buôn Ma Thuột, taxi sân bay và xe hợp đồng tại Đắk Lắk.</p>
            </div>
            <div class="footer__col">
                <h3 class="footer__col-title">Dịch vụ</h3>
                <ul class="footer__col-list" role="list">
                    <li><a href="./taxi-buon-ma-thuot.html"><i class="fa-solid fa-location-dot" aria-hidden="true"></i>Taxi Buôn Ma Thuột</a></li>
                    <li><a href="./taxi-buon-ma-thuot-24-7.html"><i class="fa-solid fa-clock" aria-hidden="true"></i>Taxi Buôn Ma Thuột 24/7</a></li>
                    <li><a href="./taxi-bmt.html"><i class="fa-solid fa-taxi" aria-hidden="true"></i>Taxi BMT</a></li>
                    <li><a href="./taxi-dak-lak.html"><i class="fa-solid fa-map" aria-hidden="true"></i>Taxi Đắk Lắk</a></li>
                    <li><a href="./taxi-4-cho-bmt.html"><i class="fa-solid fa-car" aria-hidden="true"></i>Taxi 4 chỗ</a></li>
                    <li><a href="./taxi-7-cho-bmt.html"><i class="fa-solid fa-van-shuttle" aria-hidden="true"></i>Taxi 7 chỗ</a></li>
                    <li><a href="./taxi-san-bay-buon-ma-thuot.html"><i class="fa-solid fa-plane-arrival" aria-hidden="true"></i>Taxi sân bay</a></li>
                    <li><a href="./taxi-buon-ma-thuot-di-san-bay.html"><i class="fa-solid fa-route" aria-hidden="true"></i>Taxi đi sân bay</a></li>
                    <li><a href="./taxi-buon-ma-thuot-di-buon-don.html"><i class="fa-solid fa-map-location-dot" aria-hidden="true"></i>Taxi đi Buôn Đôn</a></li>
                    <li><a href="./taxi-buon-ma-thuot-di-ho-lak.html"><i class="fa-solid fa-water" aria-hidden="true"></i>Taxi đi Hồ Lắk</a></li>
                    <li><a href="./taxi-buon-ma-thuot-di-ea-kar.html"><i class="fa-solid fa-road" aria-hidden="true"></i>Taxi đi Ea Kar</a></li>
                    <li><a href="./taxi-dien-bmt.html"><i class="fa-solid fa-bolt" aria-hidden="true"></i>Taxi điện BMT</a></li>
                    <li><a href="./taxi-dem-buon-ma-thuot.html"><i class="fa-solid fa-moon" aria-hidden="true"></i>Taxi đêm BMT</a></li>
                    <li><a href="./taxi-benh-vien-buon-ma-thuot.html"><i class="fa-solid fa-hospital" aria-hidden="true"></i>Taxi bệnh viện</a></li>
                    <li><a href="./taxi-ben-xe-buon-ma-thuot.html"><i class="fa-solid fa-bus" aria-hidden="true"></i>Taxi bến xe</a></li>
                    <li><a href="./thue-xe-7-cho-buon-ma-thuot.html"><i class="fa-solid fa-users" aria-hidden="true"></i>Thuê xe 7 chỗ</a></li>
                    <li><a href="./thue-xe-co-tai-xe-buon-ma-thuot.html"><i class="fa-solid fa-id-card" aria-hidden="true"></i>Thuê xe có tài xế</a></li>
                    <li><a href="./xe-hop-dong-bmt.html"><i class="fa-solid fa-file-signature" aria-hidden="true"></i>Xe hợp đồng BMT</a></li>
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
            <p>© 2026 <strong>Tổng Đài Taxi BMT</strong> – Taxi Buôn Ma Thuột</p>
            <ul class="footer__bottom-links" role="list">
                <li><a href="./about.html">Giới thiệu</a></li>
                <li><a href="./service.html">Dịch vụ</a></li>
                <li><a href="./contact.html">Liên hệ</a></li>
            </ul>
        </div>
    </div>
</footer>

<div class="float-contact" aria-label="Liên hệ nhanh">
    <a class="float-contact__btn float-contact__btn--zalo js-zalo-link" href="https://zalo.me/${zaloTel}" target="_blank" rel="noopener noreferrer" aria-label="Chat Zalo">
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
    ${pageHero(heroTitle(page.title), page.image, ['Dịch vụ', page.eyebrow])}

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
                    <a class="btn btn--outline js-zalo-link" href="https://zalo.me/${zaloTel}" target="_blank" rel="noopener noreferrer">
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
                <h2 class="section-heading__title" id="detail-title">Tư vấn đặt ${page.eyebrow}</h2>
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
                author: { '@type': 'Organization', name: 'Tổng Đài Taxi BMT' },
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
                    <a class="btn btn--outline js-zalo-link" href="https://zalo.me/${zaloTel}" target="_blank" rel="noopener noreferrer">
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
    ${pageHero(heroTitle(article.title), article.image, ['Tin tức', 'Bài viết'])}

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
