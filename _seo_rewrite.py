#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Chèn nội dung độc nhất + bảng giá vào các trang landing (giữ) để chống trùng lặp."""
import re, sys, pathlib

BASE = pathlib.Path(__file__).parent / "pages"

def card(title, desc):
    return ('                <article class="feature-card fade-in">\n'
            f'                    <h2 class="feature-card__title">{title}</h2>\n'
            f'                    <p class="feature-card__desc">{desc}</p>\n'
            '                </article>')

def faq(q, a):
    return ('                <article class="feature-card fade-in">\n'
            f'                    <h3 class="feature-card__title">{q}</h3>\n'
            f'                    <p class="feature-card__desc">{a}</p>\n'
            '                </article>')

def bullets(items):
    out = []
    for i, it in enumerate(items):
        pad = "                    " if i == 0 else "                        "
        out.append(f'{pad}<li><i class="fa-solid fa-check" aria-hidden="true"></i>{it}</li>')
    return "\n".join(out)

def price_table(title, sub, rows, note):
    head = ('\n            <div class="section-heading section-heading--center fade-in" style="margin-top: 3rem;">\n'
            f'                <h2 class="section-heading__title">{title}</h2>\n'
            f'                <p class="section-heading__sub">{sub}</p>\n'
            '            </div>\n'
            '            <div style="overflow-x:auto; margin-top:1.5rem;">\n'
            '                <table style="width:100%; border-collapse:collapse; min-width:520px;">\n'
            '                    <thead><tr style="background:#f5f5f5;">\n'
            '                        <th style="border:1px solid #ddd; padding:12px; text-align:left;">Hạng mục</th>\n'
            '                        <th style="border:1px solid #ddd; padding:12px;">Xe 4 chỗ</th>\n'
            '                        <th style="border:1px solid #ddd; padding:12px;">Xe 7 chỗ</th>\n'
            '                    </tr></thead>\n                    <tbody>\n')
    body = ""
    for r in rows:
        body += ('                        <tr>\n'
                 f'                            <td style="border:1px solid #ddd; padding:12px;">{r[0]}</td>\n'
                 f'                            <td style="border:1px solid #ddd; padding:12px; text-align:center;">{r[1]}</td>\n'
                 f'                            <td style="border:1px solid #ddd; padding:12px; text-align:center;">{r[2]}</td>\n'
                 '                        </tr>\n')
    tail = ('                    </tbody>\n                </table>\n'
            f'                <p class="section-heading__sub" style="margin-top:1rem; font-size:0.9rem;">{note}</p>\n'
            '            </div>')
    return head + body + tail

# ---- Nội dung riêng từng trang ----
PAGES = {}

PAGES["taxi-san-bay-buon-ma-thuot.html"] = dict(
    intro='Dịch vụ <strong>taxi sân bay Buôn Ma Thuột</strong> đưa đón giữa trung tâm thành phố và Cảng hàng không Buôn Ma Thuột (xã Hòa Thắng, cách trung tâm khoảng 10km, đi hết 15-20 phút). Nhận đón theo giờ bay, kể cả chuyến sáng sớm và đêm muộn, báo giá trọn gói cố định không lo kẹt xe đội cước.',
    bullets=['Đón tận sảnh ga đến, cầm bảng tên theo yêu cầu','Theo dõi giờ hạ cánh, đón cả khi máy bay trễ','Giá trọn gói cố định, không tính thêm phí chờ ngắn','Xe 4 chỗ và 7 chỗ, cốp rộng chứa nhiều vali'],
    cards=[('Đón khách từ sân bay về thành phố','Tài xế chờ sẵn tại sảnh ga đến sân bay BMT, hỗ trợ xách hành lý và đưa về khách sạn, nhà riêng hay bến xe. Bạn chỉ cần gửi mã chuyến bay, chúng tôi tự canh giờ hạ cánh.'),
           ('Tiễn khách ra sân bay đúng giờ','Đặt trước giờ đón tại nhà, tài xế đến sớm 5-10 phút để bạn ra sân bay thong thả làm thủ tục. Khung giờ chuyến bay sớm 4-6h sáng vẫn nhận bình thường.'),
           ('Xe phù hợp lượng hành lý','Đi 1-3 khách ít vali chọn xe 4 chỗ; gia đình, nhóm bạn nhiều hành lý chọn xe 7 chỗ cốp rộng. Có ghế cho trẻ nhỏ nếu báo trước.')],
    price=('Bảng giá taxi sân bay Buôn Ma Thuột','Giá trọn gói 1 chiều tham khảo, gọi 0849 819 819 để chốt giá theo điểm đón cụ thể.',
           [['Trung tâm TP ↔ Sân bay BMT (~10km)','từ 140.000đ','từ 180.000đ'],
            ['Khu vực xa trung tâm','báo theo điểm đón','báo theo điểm đón'],
            ['Đặt khứ hồi / chờ đón','liên hệ ưu đãi','liên hệ ưu đãi']],
           '* Giá tham khảo, đã gồm đón 1 điểm trong nội thành. Đón nhiều điểm hoặc ngoại thành vui lòng báo trước để tính lại.'),
    faqs=[('Taxi sân bay Buôn Ma Thuột giá bao nhiêu?','Tuyến trung tâm ↔ sân bay BMT trọn gói tham khảo từ 140.000đ (4 chỗ) và từ 180.000đ (7 chỗ). Giá cố định theo điểm đón, gọi 0849 819 819 để được báo chính xác.'),
          ('Sân bay Buôn Ma Thuột cách trung tâm bao xa?','Khoảng 10km, đi xe mất 15-20 phút tùy giờ. Nên đặt xe trước 30-45 phút so với giờ cần có mặt ở sân bay.'),
          ('Có đón chuyến bay đêm và sáng sớm không?','Có. Tổng đài nhận đặt 24/7, tài xế canh theo giờ hạ cánh thực tế nên máy bay trễ vẫn được đón.')])

PAGES["taxi-buon-ma-thuot-di-buon-don.html"] = dict(
    intro='Tuyến <strong>taxi Buôn Ma Thuột đi Buôn Đôn</strong> phục vụ khách du lịch tới Khu du lịch Bản Đôn, cầu treo, vườn quốc gia Yok Đôn và các điểm cưỡi voi, nhà sàn cổ. Quãng đường khoảng 40km theo tỉnh lộ, xe chạy khoảng 50-60 phút. Nhận đưa đi và đón về trong ngày hoặc chờ tham quan.',
    bullets=['Xe riêng đưa thẳng tới Bản Đôn, Yok Đôn','Đi và về trong ngày hoặc thuê chờ tham quan','Tài xế rành đường, giới thiệu điểm dừng đẹp','Phù hợp gia đình, nhóm bạn, đoàn nhỏ'],
    cards=[('Đi Bản Đôn tham quan trong ngày','Đặt xe đón tại nhà/khách sạn ở Buôn Ma Thuột, đưa thẳng tới Khu du lịch Bản Đôn rồi đón về. Có thể ghép thêm điểm dừng chụp ảnh dọc đường cho cả nhà.'),
           ('Thuê xe chờ tham quan Buôn Đôn','Nếu muốn chủ động thời gian, bạn thuê xe chờ tại Buôn Đôn để đi giữa các điểm cầu treo, nhà voi, vườn quốc gia mà không phải gọi xe lại.'),
           ('Xe 4 chỗ và 7 chỗ cho nhóm','Nhóm 1-3 người đi xe 4 chỗ tiết kiệm; gia đình hoặc nhóm 4-6 người đi xe 7 chỗ rộng rãi, thoải mái cho chuyến đi gần 1 giờ.')],
    price=('Bảng giá taxi đi Buôn Đôn','Giá trọn gói tham khảo, gọi 0849 819 819 để báo theo lịch trình và thời gian chờ.',
           [['BMT → Buôn Đôn 1 chiều (~40km)','từ 450.000đ','từ 550.000đ'],
            ['Khứ hồi trong ngày + chờ','liên hệ','liên hệ'],
            ['Thuê xe chờ tham quan','báo theo giờ','báo theo giờ']],
           '* Giá tham khảo 1 chiều, chưa gồm vé tham quan. Đi khứ hồi và có chờ sẽ báo giá trọn gói tiết kiệm hơn.'),
    faqs=[('Từ Buôn Ma Thuột đi Buôn Đôn bao nhiêu km?','Khoảng 40km, xe chạy chừng 50-60 phút theo tỉnh lộ. Đường khá đẹp, phù hợp đi trong ngày.'),
          ('Giá taxi đi Buôn Đôn khoảng bao nhiêu?','Trọn gói 1 chiều tham khảo từ 450.000đ (4 chỗ) và từ 550.000đ (7 chỗ). Đi khứ hồi có chờ sẽ báo giá riêng, gọi 0849 819 819.'),
          ('Có thể thuê xe chờ tham quan không?','Có. Bạn thuê xe chờ tại Buôn Đôn để chủ động di chuyển giữa các điểm, tài xế đợi và đưa về Buôn Ma Thuột.')])

PAGES["taxi-buon-ma-thuot-di-ea-kar.html"] = dict(
    intro='Tuyến <strong>taxi Buôn Ma Thuột đi Ea Kar</strong> (gồm cả khu vực Ea H\'leo lân cận) chạy theo Quốc lộ 26 về phía Đông, quãng đường khoảng 52km, đi hết khoảng 1 giờ. Phục vụ khách về quê, đi công việc, thăm người thân tại thị trấn Ea Kar và các xã dọc tuyến.',
    bullets=['Chạy Quốc lộ 26, đón trả tận nơi tại Ea Kar','Nhận cả tuyến Ea H\'leo và các xã dọc đường','Đi trong ngày, khứ hồi hoặc đón theo lịch hẹn','Báo giá trọn gói rõ ràng trước khi khởi hành'],
    cards=[('Đưa đón tận nhà tại Ea Kar','Tài xế đón tại Buôn Ma Thuột và trả đúng địa chỉ ở thị trấn Ea Kar hoặc các xã lân cận, tiện cho khách lớn tuổi, mang nhiều đồ về quê.'),
           ('Nhận thêm tuyến Ea H\'leo','Ngoài Ea Kar, chúng tôi nhận chạy tiếp lên Ea H\'leo và các điểm dọc Quốc lộ 26, báo giá theo đúng quãng đường thực tế.'),
           ('Đặt đón khứ hồi theo lịch','Bạn có thể hẹn giờ đón chiều về để chủ động công việc; tài xế chạy đúng giờ, không phải tìm xe lúc cao điểm.')],
    price=('Bảng giá taxi đi Ea Kar','Giá trọn gói tham khảo theo Quốc lộ 26, gọi 0849 819 819 để báo chính xác.',
           [['BMT → Ea Kar 1 chiều (~52km)','từ 550.000đ','từ 650.000đ'],
            ['BMT → Ea H\'leo','báo theo km','báo theo km'],
            ['Khứ hồi trong ngày','liên hệ ưu đãi','liên hệ ưu đãi']],
           '* Giá tham khảo 1 chiều. Tuyến Ea H\'leo xa hơn nên tính theo quãng đường thực tế, đặt khứ hồi sẽ tiết kiệm hơn.'),
    faqs=[('Buôn Ma Thuột đi Ea Kar bao nhiêu km?','Khoảng 52km theo Quốc lộ 26, đi xe mất chừng 1 giờ tùy tình hình giao thông.'),
          ('Giá taxi đi Ea Kar bao nhiêu?','Trọn gói 1 chiều tham khảo từ 550.000đ (4 chỗ) và từ 650.000đ (7 chỗ). Gọi 0849 819 819 để chốt giá theo điểm đến.'),
          ('Có nhận chạy tiếp lên Ea H\'leo không?','Có. Chúng tôi nhận tuyến Ea Kar và Ea H\'leo cùng các xã dọc Quốc lộ 26, báo giá theo quãng đường thực tế.')])

PAGES["taxi-buon-ma-thuot-di-ho-lak.html"] = dict(
    intro='Tuyến <strong>taxi Buôn Ma Thuột đi Hồ Lắk</strong> đưa khách tới hồ nước ngọt tự nhiên lớn nhất Tây Nguyên tại thị trấn Liên Sơn, huyện Lắk. Quãng đường khoảng 56km theo Quốc lộ 27, xe chạy chừng 1 giờ 15 phút. Phù hợp đi tham quan, chèo thuyền độc mộc, cưỡi voi và nghỉ dưỡng trong ngày.',
    bullets=['Đưa thẳng tới Hồ Lắk, biệt điện Bảo Đại','Đi về trong ngày hoặc thuê chờ nghỉ dưỡng','Đường QL27 đèo dốc nhẹ, tài xế quen tuyến','Xe 4 chỗ, 7 chỗ êm cho chặng hơn 1 giờ'],
    cards=[('Tham quan Hồ Lắk trong ngày','Đón tại Buôn Ma Thuột, đưa tới thị trấn Liên Sơn để bạn chèo thuyền độc mộc, thăm buôn Jun, buôn M\'Liêng rồi đón về, gọn trong một ngày.'),
           ('Thuê xe chờ nghỉ dưỡng','Nếu nghỉ lại resort ven hồ, bạn có thể thuê xe chờ hoặc hẹn đón hôm sau. Tài xế linh hoạt theo lịch trình của đoàn.'),
           ('An toàn trên Quốc lộ 27','Tuyến đi Hồ Lắk có vài đoạn đèo dốc nhẹ; tài xế quen đường chạy chắc tay, đảm bảo an toàn cho gia đình có trẻ nhỏ và người lớn tuổi.')],
    price=('Bảng giá taxi đi Hồ Lắk','Giá trọn gói tham khảo theo Quốc lộ 27, gọi 0849 819 819 để báo chính xác.',
           [['BMT → Hồ Lắk 1 chiều (~56km)','từ 600.000đ','từ 700.000đ'],
            ['Khứ hồi trong ngày + chờ','liên hệ','liên hệ'],
            ['Thuê xe theo ngày','báo trọn gói','báo trọn gói']],
           '* Giá tham khảo 1 chiều, chưa gồm vé tham quan và dịch vụ tại hồ. Đi khứ hồi có chờ sẽ báo giá trọn gói.'),
    faqs=[('Buôn Ma Thuột đi Hồ Lắk bao nhiêu km?','Khoảng 56km theo Quốc lộ 27, xe chạy chừng 1 giờ 15 phút tới thị trấn Liên Sơn, huyện Lắk.'),
          ('Giá taxi đi Hồ Lắk bao nhiêu?','Trọn gói 1 chiều tham khảo từ 600.000đ (4 chỗ) và từ 700.000đ (7 chỗ). Gọi 0849 819 819 để chốt giá theo lịch trình.'),
          ('Đi Hồ Lắk trong ngày có kịp không?','Kịp. Nhiều khách đi sáng, tham quan, chèo thuyền rồi về Buôn Ma Thuột trong chiều. Bạn nên khởi hành trước 8h sáng.')])

PAGES["taxi-4-cho-bmt.html"] = dict(
    intro='Dịch vụ <strong>taxi 4 chỗ Buôn Ma Thuột</strong> phù hợp cho 1-3 khách đi lại trong nội thành, ra sân bay hoặc đi công việc gần. Xe sedan đời mới, máy lạnh mát, cốp đủ chứa 2-3 vali nhỏ, cước tính theo đồng hồ tiết kiệm hơn xe lớn.',
    bullets=['Tiết kiệm nhất cho 1-3 khách','Linh hoạt luồn hẻm, đỗ gọn trong nội thành','Có xe xăng và xe điện sạch, êm','Đặt nhanh qua điện thoại hoặc Zalo'],
    cards=[('Đi lại hằng ngày trong thành phố','Xe 4 chỗ cơ động cho việc đi làm, đi học, đi chợ, đi khám bệnh trong Buôn Ma Thuột. Cước theo đồng hồ km, quãng ngắn rất tiết kiệm.'),
           ('Ra sân bay, đi công việc gần','Phù hợp khách đi một mình hoặc đôi ra sân bay BMT, đi họp, đi giao dịch tại các huyện gần. Tài xế đón đúng giờ hẹn.'),
           ('Xe điện 4 chỗ nếu cần','Bạn có thể yêu cầu xe điện 4 chỗ chạy êm, không mùi xăng, sạch sẽ — lựa chọn được nhiều khách ưa chuộng gần đây.')],
    price=('Bảng giá taxi 4 chỗ Buôn Ma Thuột','Cước nội thành tham khảo, tuyến xa báo trọn gói. Gọi 0849 819 819.',
           [['Giá mở cửa (0,6km đầu)','~12.000đ','—'],
            ['Cước mỗi km (đến km 30)','~13.000–16.000đ','—'],
            ['Từ km 31 trở đi','~11.000đ','—']],
           '* Giá tham khảo cho xe 4 chỗ. Tuyến sân bay và đi huyện có giá trọn gói riêng, xem các trang tuyến tương ứng.'),
    faqs=[('Taxi 4 chỗ Buôn Ma Thuột giá bao nhiêu một km?','Tham khảo khoảng 13.000–16.000đ/km trong nội thành, từ km 31 rẻ hơn còn khoảng 11.000đ/km. Gọi 0849 819 819 để báo chính xác.'),
          ('Xe 4 chỗ chở được mấy người, mấy vali?','Chở tối đa 3 khách, cốp để vừa 2-3 vali nhỏ hoặc vài túi xách. Nếu nhiều hành lý nên chọn xe 7 chỗ.'),
          ('Có xe 4 chỗ chạy điện không?','Có. Bạn báo trước khi đặt để tổng đài điều xe điện 4 chỗ êm và sạch.')])

PAGES["taxi-7-cho-bmt.html"] = dict(
    intro='Dịch vụ <strong>taxi 7 chỗ Buôn Ma Thuột</strong> dành cho gia đình, nhóm bạn và khách nhiều hành lý. Xe SUV/MPV rộng rãi, ngồi thoải mái cho cả nhà, cốp lớn chứa nhiều vali — lý tưởng để ra sân bay, đi du lịch Buôn Đôn, Hồ Lắk hay về quê các huyện.',
    bullets=['Ngồi thoải mái cho 4-6 khách','Cốp rộng chở nhiều vali, đồ đạc','Hợp đi sân bay, du lịch, về quê cả nhà','Đặt theo chuyến hoặc trọn gói tuyến xa'],
    cards=[('Gia đình, nhóm bạn đi chung','Một xe 7 chỗ chở gọn cả nhà thay vì tách hai xe 4 chỗ, vừa tiết kiệm vừa vui. Trẻ nhỏ và người lớn tuổi ngồi rộng rãi, đỡ mệt.'),
           ('Đi sân bay nhiều hành lý','Cốp xe 7 chỗ chứa được nhiều vali lớn, phù hợp cả nhà ra sân bay BMT mà không phải để đồ lên ghế.'),
           ('Du lịch và về quê các huyện','Lý tưởng cho chuyến đi Buôn Đôn, Hồ Lắk, Ea Kar hay về quê dịp lễ Tết. Đặt trọn gói theo tuyến để biết trước chi phí.')],
    price=('Bảng giá taxi 7 chỗ Buôn Ma Thuột','Cước nội thành tham khảo, tuyến xa báo trọn gói. Gọi 0849 819 819.',
           [['Giá mở cửa (0,6km đầu)','—','~13.000đ'],
            ['Cước mỗi km (đến km 30)','—','~14.000–17.000đ'],
            ['Từ km 31 trở đi','—','~12.000–13.000đ']],
           '* Giá tham khảo cho xe 7 chỗ. Tuyến sân bay, Buôn Đôn, Hồ Lắk, Ea Kar có giá trọn gói riêng, xem các trang tuyến.'),
    faqs=[('Taxi 7 chỗ Buôn Ma Thuột giá bao nhiêu?','Cước nội thành tham khảo khoảng 14.000–17.000đ/km; tuyến đi huyện và sân bay tính trọn gói. Gọi 0849 819 819 để báo giá.'),
          ('Xe 7 chỗ chở được mấy người?','Chở thoải mái 6 khách cùng hành lý, hoặc 7 khách ít đồ. Đông hơn nên đặt thêm xe.'),
          ('Có xe 7 chỗ đi du lịch trong ngày không?','Có. Chúng tôi nhận xe 7 chỗ đi Buôn Đôn, Hồ Lắk, Ea Kar… theo chuyến hoặc trọn gói cả ngày.')])

PAGES["taxi-dien-bmt.html"] = dict(
    intro='Dịch vụ <strong>taxi điện BMT</strong> dùng xe ô tô điện đời mới chạy êm, không mùi xăng dầu, không tiếng ồn động cơ — mang lại trải nghiệm sạch sẽ, thân thiện môi trường khi di chuyển trong Buôn Ma Thuột. Có xe điện 4 chỗ và xe điện cỡ lớn theo nhu cầu.',
    bullets=['Xe điện êm, sạch, không mùi xăng dầu','Thân thiện môi trường, phù hợp gia đình có trẻ','Đón nhanh trong nội thành Buôn Ma Thuột','Cước rõ ràng, đặt qua tổng đài 24/7'],
    cards=[('Trải nghiệm di chuyển êm ái','Xe điện gần như không rung và không ồn, khoang xe sạch, không mùi nhiên liệu — dễ chịu cho người say xe, trẻ nhỏ và người lớn tuổi.'),
           ('Lựa chọn xanh cho thành phố','Không phát thải khí xả tại chỗ, taxi điện góp phần giảm ô nhiễm không khí ở khu trung tâm đông đúc của Buôn Ma Thuột.'),
           ('Đặt xe điện dễ như taxi thường','Gọi 0849 819 819 và yêu cầu xe điện, tổng đài điều xe gần bạn nhất. Dùng cho đi làm, đi sân bay hay đưa đón hằng ngày.')],
    price=('Giá taxi điện BMT','Cước tương đương taxi thường, tham khảo bên dưới. Gọi 0849 819 819 để báo chính xác.',
           [['Giá mở cửa (0,6km đầu)','~12.000đ','~13.000đ'],
            ['Cước mỗi km nội thành','~13.000–16.000đ','~14.000–17.000đ'],
            ['Tuyến xa / sân bay','báo trọn gói','báo trọn gói']],
           '* Giá tham khảo. Số lượng xe điện có hạn theo khung giờ, nên đặt trước để chủ động.'),
    faqs=[('Taxi điện BMT có đắt hơn taxi thường không?','Không. Cước taxi điện tương đương taxi xăng cùng loại, lợi thế là chạy êm và sạch hơn. Gọi 0849 819 819 để báo giá.'),
          ('Làm sao đặt được xe điện?','Khi gọi tổng đài, bạn nói rõ muốn đi xe điện. Số lượng xe điện có hạn nên đặt trước sẽ chắc chắn hơn.'),
          ('Xe điện có chạy tuyến xa, đi huyện không?','Có thể, tùy quãng đường và trạm sạc. Với tuyến rất xa, tổng đài sẽ tư vấn xe phù hợp nhất.')])

PAGES["xe-hop-dong-bmt.html"] = dict(
    intro='Dịch vụ <strong>xe hợp đồng BMT</strong> cung cấp xe có tài xế kèm hợp đồng cho cá nhân, cơ quan và doanh nghiệp tại Buôn Ma Thuột: đưa đón cán bộ, đi công tác, sự kiện, đám tiệc, tour du lịch Đắk Lắk. Có xe 4, 7 chỗ và xe lớn hơn, xuất hóa đơn đầy đủ.',
    bullets=['Hợp đồng rõ ràng, xuất hóa đơn VAT','Đưa đón cố định theo tuyến/lịch cho cơ quan','Xe 4-7 chỗ và xe lớn cho đoàn','Tài xế lịch sự, đúng giờ, rành đường'],
    cards=[('Đưa đón công tác, sự kiện','Nhận hợp đồng đưa đón khách công tác, đại biểu hội nghị, đoàn famtrip tại Buôn Ma Thuột với lịch trình cố định và tài xế chuyên nghiệp.'),
           ('Hợp đồng theo tháng cho doanh nghiệp','Doanh nghiệp cần đưa đón nhân viên, chuyên gia hằng ngày có thể ký hợp đồng theo tháng, chi phí ổn định và có hóa đơn đầy đủ.'),
           ('Xe cho đám tiệc, du lịch','Phục vụ rước dâu, đám tiệc, tour tham quan Buôn Đôn, Hồ Lắk, các điểm Đắk Lắk theo đoàn, báo giá trọn gói theo lịch trình.')],
    price=('Giá xe hợp đồng BMT','Giá tùy loại xe, số ngày và lịch trình. Gọi 0849 819 819 để nhận báo giá hợp đồng.',
           [['Thuê theo ngày (trong tỉnh)','liên hệ','liên hệ'],
            ['Hợp đồng tháng đưa đón','báo theo lịch','báo theo lịch'],
            ['Sự kiện / tour trọn gói','báo trọn gói','báo trọn gói']],
           '* Xe hợp đồng báo giá theo yêu cầu cụ thể (số ngày, quãng đường, có lưu đêm hay không). Liên hệ để nhận báo giá và hợp đồng.'),
    faqs=[('Xe hợp đồng BMT có xuất hóa đơn không?','Có. Chúng tôi xuất hóa đơn đầy đủ cho khách công tác và doanh nghiệp, kèm hợp đồng vận chuyển rõ ràng.'),
          ('Có nhận hợp đồng đưa đón theo tháng không?','Có. Phù hợp doanh nghiệp cần đưa đón nhân viên/chuyên gia cố định; chi phí ổn định, gọi 0849 819 819 để báo giá.'),
          ('Xe hợp đồng có những loại nào?','Có xe 4 chỗ, 7 chỗ và xe lớn hơn cho đoàn. Tùy số khách và lịch trình, tổng đài tư vấn loại xe phù hợp.')])

PAGES["thue-xe-co-tai-xe-buon-ma-thuot.html"] = dict(
    intro='Dịch vụ <strong>thuê xe có tài xế Buôn Ma Thuột</strong> cho khách cần xe riêng theo chuyến hoặc theo ngày: đi công việc nhiều điểm, du lịch Đắk Lắk, về quê các huyện. Bạn chỉ việc lên xe, tài xế lo lái và đường đi, có xe 4 chỗ, 7 chỗ tùy nhu cầu.',
    bullets=['Thuê theo chuyến, theo ngày hoặc nhiều ngày','Tài xế rành đường, chủ động lịch trình của bạn','Xe 4 chỗ, 7 chỗ đời mới, máy lạnh mát','Báo giá trọn gói, không lo phát sinh'],
    cards=[('Thuê xe đi công việc nhiều điểm','Khi cần ghé nhiều nơi trong ngày (gặp đối tác, giao dịch, khảo sát), thuê xe có tài xế giúp bạn chủ động thời gian mà không phải gọi taxi từng chặng.'),
           ('Thuê xe du lịch Đắk Lắk','Xe riêng đưa cả nhà đi Buôn Đôn, Hồ Lắk, thác Dray Nur, các buôn làng… tài xế quen đường, gợi ý điểm dừng và quán ăn ngon.'),
           ('Thuê xe theo ngày / nhiều ngày','Phù hợp đoàn công tác hoặc tour dài, thuê xe trọn ngày hoặc nhiều ngày, có thể lưu đêm tại điểm đến, báo giá rõ trước.')],
    price=('Giá thuê xe có tài xế Buôn Ma Thuột','Giá tùy lịch trình và số ngày. Gọi 0849 819 819 để nhận báo giá.',
           [['Thuê theo ngày trong nội thành','liên hệ','liên hệ'],
            ['Thuê đi tỉnh / du lịch','báo trọn gói','báo trọn gói'],
            ['Thuê nhiều ngày (có lưu đêm)','ưu đãi','ưu đãi']],
           '* Giá thuê xe phụ thuộc quãng đường, số ngày và việc lưu đêm. Liên hệ tổng đài để nhận báo giá trọn gói chính xác.'),
    faqs=[('Thuê xe có tài xế ở Buôn Ma Thuột giá bao nhiêu?','Giá tính theo chuyến hoặc theo ngày, tùy quãng đường và số ngày. Gọi 0849 819 819 để nhận báo giá trọn gói phù hợp.'),
          ('Thuê xe có bao gồm xăng và tài xế không?','Có, giá trọn gói thường gồm xe, tài xế và nhiên liệu trong phạm vi thỏa thuận; các khoản như cầu đường, ăn nghỉ tài xế khi đi xa sẽ trao đổi rõ trước.'),
          ('Có thuê xe nhiều ngày, lưu đêm được không?','Được. Chúng tôi nhận thuê xe nhiều ngày, lưu đêm tại điểm đến cho khách công tác và du lịch dài ngày.')])

PAGES["thue-xe-7-cho-buon-ma-thuot.html"] = dict(
    intro='Dịch vụ <strong>thuê xe 7 chỗ Buôn Ma Thuột</strong> có tài xế dành cho gia đình và nhóm 4-6 người cần xe rộng đi du lịch, ra sân bay, về quê hay công tác. Xe SUV/MPV 7 chỗ đời mới, cốp lớn, thuê theo chuyến hoặc theo ngày, báo giá trọn gói minh bạch.',
    bullets=['Xe 7 chỗ rộng cho 4-6 khách + hành lý','Thuê theo chuyến, theo ngày hoặc tour dài','Hợp đi sân bay, Buôn Đôn, Hồ Lắk, về quê','Tài xế kinh nghiệm, giá trọn gói rõ ràng'],
    cards=[('Xe 7 chỗ cho gia đình đông người','Một xe chở gọn cả nhà cùng hành lý, không phải tách xe. Ghế rộng, máy lạnh mát, thoải mái cho chặng đường dài.'),
           ('Thuê đi sân bay và tỉnh xa','Phù hợp cả nhà ra sân bay BMT nhiều vali, hoặc đi các tỉnh lân cận. Thuê trọn gói biết trước chi phí, không lo đội cước.'),
           ('Thuê theo ngày đi du lịch','Thuê xe 7 chỗ trọn ngày đi Buôn Đôn, Hồ Lắk, thác Dray Nur… tài xế đợi và đưa đón theo lịch trình của đoàn.')],
    price=('Giá thuê xe 7 chỗ Buôn Ma Thuột','Giá tùy lịch trình và số ngày. Gọi 0849 819 819 để nhận báo giá.',
           [['Thuê nửa ngày trong nội thành','liên hệ','—'],
            ['Thuê nguyên ngày','báo trọn gói','—'],
            ['Đi tỉnh / nhiều ngày','ưu đãi','—']],
           '* Bảng trên cho xe 7 chỗ. Giá phụ thuộc quãng đường, số ngày và lưu đêm; liên hệ tổng đài để nhận báo giá chính xác.'),
    faqs=[('Thuê xe 7 chỗ Buôn Ma Thuột giá bao nhiêu?','Giá theo chuyến hoặc theo ngày, tùy lịch trình. Gọi 0849 819 819 để nhận báo giá trọn gói cho xe 7 chỗ.'),
          ('Xe 7 chỗ thuê được đi tỉnh khác không?','Được. Chúng tôi nhận thuê xe 7 chỗ đi các tỉnh lân cận và tour nhiều ngày, có thể lưu đêm tại điểm đến.'),
          ('Thuê xe 7 chỗ có gồm tài xế không?','Có. Dịch vụ là thuê xe kèm tài xế; bạn chỉ việc lên xe, tài xế lo lái và lộ trình.')])

PAGES["taxi-ben-xe-buon-ma-thuot.html"] = dict(
    intro='Dịch vụ <strong>taxi bến xe Buôn Ma Thuột</strong> đưa đón khách tại Bến xe phía Bắc, Bến xe phía Nam (liên tỉnh) và các nhà xe trong thành phố. Nhận đón khách vừa xuống xe khách về nhà/khách sạn, hoặc đưa ra bến kịp giờ xe chạy, kể cả chuyến đêm.',
    bullets=['Đón tại bến xe phía Bắc, phía Nam và nhà xe','Canh giờ xe khách tới, đón ngay khi bạn xuống','Đưa ra bến kịp giờ, kể cả sáng sớm và đêm','Cước rõ ràng theo đồng hồ, đón tận cửa'],
    cards=[('Đón khách vừa xuống bến xe','Sau chặng xe khách dài, bạn chỉ cần gọi 0849 819 819, taxi đón ngay tại cổng bến đưa về nhà hay khách sạn, đỡ phải chờ giữa trời nắng/mưa.'),
           ('Đưa ra bến kịp giờ xe chạy','Đặt trước giờ đón tại nhà, tài xế đến sớm để bạn ra bến thong thả, không lỡ chuyến xe đi Sài Gòn, Nha Trang, Đà Lạt…'),
           ('Nhận cả chuyến đêm','Nhiều xe khách chạy đêm và rạng sáng; tổng đài nhận đặt 24/7 nên bạn luôn có xe ra/vào bến đúng giờ.')],
    price=('Giá taxi bến xe Buôn Ma Thuột','Cước theo đồng hồ tùy điểm đón. Gọi 0849 819 819 để biết giá ước tính.',
           [['Giá mở cửa (0,6km đầu)','~12.000đ','~13.000đ'],
            ['Cước mỗi km nội thành','~13.000–16.000đ','~14.000–17.000đ'],
            ['Đón đêm khuya','theo cước hiện hành','theo cước hiện hành']],
           '* Giá tham khảo theo đồng hồ km. Khoảng cách từ bến về điểm đến quyết định cước, gọi tổng đài để ước tính nhanh.'),
    faqs=[('Taxi có đón tại bến xe phía Bắc Buôn Ma Thuột không?','Có. Chúng tôi đón tại Bến xe phía Bắc, phía Nam và các nhà xe trong thành phố, đón tận cổng khi bạn vừa xuống.'),
          ('Đặt taxi ra bến lúc sáng sớm được không?','Được. Tổng đài nhận xe 24/7, bạn nên đặt trước để tài xế đón đúng giờ ra bến kịp chuyến.'),
          ('Giá taxi từ bến xe về trung tâm bao nhiêu?','Tính theo đồng hồ km, tùy điểm đến. Gọi 0849 819 819 báo địa chỉ để được ước tính cước nhanh.')])

PAGES["taxi-benh-vien-buon-ma-thuot.html"] = dict(
    intro='Dịch vụ <strong>taxi bệnh viện Buôn Ma Thuột</strong> đưa đón khách đi khám, nhập viện và xuất viện tại Bệnh viện Đa khoa Vùng Tây Nguyên, Bệnh viện Đa khoa TP. Buôn Ma Thuột, bệnh viện Thiện Hạnh và các phòng khám. Tài xế hỗ trợ người bệnh, người lớn tuổi lên xuống xe nhẹ nhàng.',
    bullets=['Đón tận sảnh các bệnh viện ở Buôn Ma Thuột','Hỗ trợ người bệnh, người già lên xuống xe','Xe sạch sẽ, máy lạnh, đi êm','Nhận 24/7 cho ca cấp và xuất viện'],
    cards=[('Đưa đón đi khám bệnh','Đón tại nhà đưa tới Bệnh viện Đa khoa Vùng Tây Nguyên hay các bệnh viện khác và đón về sau khi khám xong, tiện cho người lớn tuổi đi một mình.'),
           ('Hỗ trợ ngày xuất viện','Ngày ra viện thường nhiều đồ và người bệnh còn yếu; tài xế giúp xách đồ, đỡ người bệnh lên xe, chạy êm đưa về tận nhà.'),
           ('Nhận chuyển viện, đi gấp','Cần đi gấp trong đêm hoặc chuyển sang cơ sở khác, gọi tổng đài 24/7 để có xe nhanh, tài xế chạy chắc tay và an toàn.')],
    price=('Giá taxi bệnh viện Buôn Ma Thuột','Cước theo đồng hồ km. Gọi 0849 819 819 để biết giá ước tính theo điểm đón.',
           [['Giá mở cửa (0,6km đầu)','~12.000đ','~13.000đ'],
            ['Cước mỗi km nội thành','~13.000–16.000đ','~14.000–17.000đ'],
            ['Đi trong đêm','theo cước hiện hành','theo cước hiện hành']],
           '* Giá tham khảo theo đồng hồ. Tài xế hỗ trợ người bệnh tận tình, không thu thêm phí hỗ trợ lên xuống xe.'),
    faqs=[('Taxi có đón tại Bệnh viện Vùng Tây Nguyên không?','Có. Chúng tôi đón tận sảnh Bệnh viện Đa khoa Vùng Tây Nguyên và các bệnh viện, phòng khám khác ở Buôn Ma Thuột.'),
          ('Có hỗ trợ người bệnh, người già lên xe không?','Có. Tài xế giúp đỡ người bệnh và người lớn tuổi lên xuống xe, xách đồ, chạy êm để người bệnh đỡ mệt.'),
          ('Có nhận đi bệnh viện trong đêm không?','Có. Tổng đài nhận xe 24/7 cho các trường hợp đi khám gấp, chuyển viện hoặc xuất viện ngoài giờ.')])

PAGES["lai-ho-buon-ma-thuot-24h.html"] = dict(
    intro='Dịch vụ <strong>lái hộ Buôn Ma Thuột 24h</strong> cử tài xế đến lái chính xe của bạn về nhà an toàn khi bạn đã uống rượu bia, mệt hoặc không tiện tự lái. Tài xế có kinh nghiệm, cầm lái cẩn thận, giúp bạn tránh rủi ro và mức phạt nồng độ cồn.',
    bullets=['Tài xế đến lái chính xe của bạn về nhà','Tránh rủi ro và mức phạt nồng độ cồn','Phục vụ 24h, kể cả đêm khuya','Tài xế kinh nghiệm, giữ xe cẩn thận'],
    cards=[('Lái hộ sau tiệc, sau nhậu','Sau bữa tiệc, tiếp khách có rượu bia, gọi lái hộ để tài xế đưa bạn và chính chiếc xe của bạn về nhà an toàn, không lo bị phạt nồng độ cồn.'),
           ('Lái hộ khi mệt, đường xa','Khi bạn mệt, buồn ngủ hoặc vừa đi đường dài, tài xế lái hộ giúp cầm lái chặng cuối để bạn nghỉ ngơi, đảm bảo an toàn.'),
           ('Có mặt nhanh, phục vụ 24h','Gọi 0849 819 819 bất kể giờ giấc, tài xế tới điểm hẹn trong thành phố để nhận xe và đưa bạn về.')],
    price=('Giá dịch vụ lái hộ Buôn Ma Thuột','Phí tùy quãng đường và khung giờ. Gọi 0849 819 819 để báo giá nhanh.',
           [['Lái hộ trong nội thành','liên hệ','—'],
            ['Lái hộ đi ngoại thành / huyện','báo theo km','—'],
            ['Khung giờ đêm khuya','theo thỏa thuận','—']],
           '* Phí lái hộ tính theo quãng đường và thời điểm. Gọi tổng đài báo điểm đón và điểm đến để nhận giá ngay.'),
    faqs=[('Lái hộ Buôn Ma Thuột hoạt động mấy giờ?','Phục vụ 24h, kể cả đêm khuya và rạng sáng. Gọi 0849 819 819 là có tài xế tới nhận xe.'),
          ('Giá lái hộ tính như thế nào?','Tính theo quãng đường về nhà và khung giờ. Báo điểm đón, điểm đến để tổng đài tính phí nhanh và rõ ràng.'),
          ('Tài xế lái hộ có kinh nghiệm không?','Có. Tài xế lái hộ giàu kinh nghiệm, cầm lái cẩn thận, giữ gìn xe và đưa bạn về an toàn.')])

assert len(PAGES) == 13, len(PAGES)

def replace_block(html, anchor_id, new_inner, kind):
    """Thay phần trong features-grid của section có heading id=anchor_id."""
    # tìm vị trí heading
    m = re.search(r'id="%s".*?</h2>' % re.escape(anchor_id), html, re.S)
    if not m:
        raise RuntimeError("no anchor " + anchor_id)
    start = m.end()
    g = re.search(r'<div class="features-grid">\s*', html[start:], re.S)
    gstart = start + g.end()
    # tìm </div>\s*</div>\s*</section> đầu tiên
    e = re.search(r'\s*</div>\s*</div>\s*</section>', html[gstart:], re.S)
    gend = gstart + e.start()
    return html[:gstart] + "\n" + new_inner + "\n            " + html[gend:]

for fname, d in PAGES.items():
    p = BASE / fname
    html = p.read_text(encoding="utf-8")
    orig = html

    # 1) intro <p> + <ul>
    new_intro = ('<p>' + d['intro'] + '</p>\n'
                 '                <ul class="footer__col-list" role="list" style="margin: 1.5rem 0 0;">\n'
                 + bullets(d['bullets']) + '\n                </ul>')
    html = re.sub(r'(id="landing-title">.*?</h2>\s*)<p>.*?</ul>',
                  lambda mm: mm.group(1) + new_intro, html, count=1, flags=re.S)

    # 2) detail features-grid -> 3 cards + bảng giá
    cards_html = "\n".join(card(t, dsc) for t, dsc in d['cards'])
    ptitle, psub, prows, pnote = d['price']
    cards_html += "\n            </div>\n" + price_table(ptitle, psub, prows, pnote) + "\n            <div style=\"display:none\">"
    # mẹo: ta sẽ chèn cards + table, nhưng cần khớp cấu trúc đóng. Dùng cách thủ công:
    # thay toàn bộ inner của features-grid (detail) bằng cards, rồi chèn table sau </div> grid.
    # Đơn giản hơn: thay inner = cards, sau đó chèn bảng giá ngay trước </section> của detail.
    cards_only = "\n".join(card(t, dsc) for t, dsc in d['cards'])
    html = replace_block(html, "detail-title", cards_only, "cards")
    # chèn bảng giá: ngay sau features-grid của detail, trước </div></section>
    tbl = price_table(ptitle, psub, prows, pnote)
    # tìm lại detail section end để chèn
    m = re.search(r'id="detail-title".*?<div class="features-grid">.*?</div>', html, re.S)
    insert_at = m.end()
    html = html[:insert_at] + "\n" + tbl + html[insert_at:]

    # 3) FAQ grid
    faqs_html = "\n".join(faq(q, a) for q, a in d['faqs'])
    html = replace_block(html, "faq-title", faqs_html, "faq")

    # 4) JSON-LD FAQ mainEntity
    entries = []
    for q, a in d['faqs']:
        aj = a.replace('"', '\\"')
        qj = q.replace('"', '\\"')
        entries.append('                                {\n'
                       '                                        "@type": "Question",\n'
                       f'                                        "name": "{qj}",\n'
                       '                                        "acceptedAnswer": {\n'
                       '                                                "@type": "Answer",\n'
                       f'                                                "text": "{aj}"\n'
                       '                                        }\n'
                       '                                }')
    new_main = '"mainEntity": [\n' + ",\n".join(entries) + '\n                        ]'
    html = re.sub(r'"mainEntity": \[.*?\n\s*\]', new_main, html, count=1, flags=re.S)

    if html == orig:
        print("!! KHÔNG đổi:", fname); sys.exit(1)
    p.write_text(html, encoding="utf-8")
    print("OK", fname)

print("DONE")
