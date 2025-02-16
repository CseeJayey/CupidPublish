export interface Answer {
    text: string;
    points: number;
}

export interface Question {
    question: string;
    answers: Answer[];
}

export const quizData: Question[] = [
    {
        question: 'Bạn thường phản ứng thế nào khi gặp mâu thuẫn hoặc áp lực?',
        answers: [
            { text: 'Bình tĩnh lắng nghe, tìm cách giải quyết hợp lý.', points: 10 },
            { text: 'Cảm thấy khó chịu nhưng cố gắng thỏa hiệp.', points: 5 },
            { text: 'Cáu gắt hoặc né tránh cuộc trò chuyện.', points: 3 },
            { text: 'Nổi nóng hoặc mất kiểm soát cảm xúc.', points: 0 },
        ],
    },
    {
        question: 'Bạn có thể hiểu và chia sẻ cảm xúc với người khác dễ dàng không?',
        answers: [
            { text: 'Tôi luôn cố gắng đặt mình vào vị trí của họ và an ủi.', points: 10 },
            { text: 'Tôi lắng nghe nhưng đôi khi không biết cách phản hồi phù hợp.', points: 5 },
            { text: 'Tôi thường khuyên họ thay vì chỉ lắng nghe.', points: 3 },
            { text: 'Tôi thấy khó hiểu hoặc không quan tâm lắm đến cảm xúc của họ.', points: 0 },
        ],
    },
    {
        question: 'Bạn cảm thấy thế nào về bản thân và các quyết định trong cuộc sống?',
        answers: [
            { text: 'Tôi tự tin vào bản thân và luôn sẵn sàng chịu trách nhiệm về quyết định của mình.', points: 10 },
            { text: 'Tôi khá tự tin nhưng đôi khi vẫn nghi ngờ bản thân.', points: 5 },
            { text: 'Tôi thường xuyên do dự và lo lắng về quyết định của mình.', points: 3 },
            { text: 'Tôi cảm thấy bản thân không đủ tốt hoặc dễ bị ảnh hưởng bởi ý kiến người khác.', points: 0 },
        ],
    },
    {
        question: 'Bạn sẵn sàng ưu tiên mối quan hệ lâu dài hơn nhu cầu cá nhân không?',
        answers: [
            { text: 'Có, tôi luôn cân nhắc lợi ích của cả hai bên trong mọi quyết định.', points: 10 },
            { text: 'Tôi cố gắng cân bằng giữa nhu cầu cá nhân và mối quan hệ.', points: 5 },
            { text: 'Tôi thích tự do cá nhân và chưa sẵn sàng hy sinh vì mối quan hệ.', points: 3 },
            { text: 'Tôi không thích ràng buộc lâu dài, hôn nhân không phải ưu tiên của tôi.', points: 0 },
        ],
    },
    {
        question: 'Bạn có thường chia sẻ suy nghĩ và cảm xúc của mình với người yêu không?',
        answers: [
            { text: 'Tôi luôn chủ động chia sẻ cảm xúc và suy nghĩ với đối phương.', points: 10 },
            { text: 'Tôi chia sẻ khi cảm thấy cần thiết nhưng đôi khi giữ lại những điều khó nói.', points: 5 },
            { text: 'Tôi ít khi chia sẻ vì sợ làm đối phương lo lắng hoặc hiểu sai.', points: 3 },
            { text: 'Tôi không thích nói về cảm xúc của mình và thường tự giải quyết vấn đề.', points: 0 },
        ],
    },
    {
        question: 'Bạn có thực sự chú ý khi đối phương chia sẻ không?',
        answers: [
            { text: 'Tôi tập trung lắng nghe, đặt câu hỏi để hiểu rõ hơn và thể hiện sự đồng cảm.', points: 10 },
            { text: 'Tôi lắng nghe nhưng đôi khi bị xao nhãng hoặc không biết cách phản hồi.', points: 5 },
            { text: 'Tôi hay đưa ra lời khuyên ngay lập tức thay vì thực sự lắng nghe.', points: 3 },
            { text: 'Tôi thường không quan tâm hoặc thay đổi chủ đề nếu thấy nhàm chán.', points: 0 },
        ],
    },
    {
        question: 'Bạn thường giải quyết tranh cãi trong mối quan hệ bằng cách nào?',
        answers: [
            { text: 'Giữ bình tĩnh, cùng đối phương tìm cách giải quyết thấu đáo.', points: 10 },
            { text: 'Tránh xa một thời gian rồi mới nói chuyện lại.', points: 5 },
            { text: 'Cố gắng thắng trong cuộc tranh luận bằng lý lẽ của mình.', points: 3 },
            { text: 'Dùng sự im lặng hoặc giận dỗi để thể hiện sự không hài lòng.', points: 0 },
        ],
    },
    {
        question: 'Bạn sẵn sàng thảo luận về các chủ đề nhạy cảm với đối phương chứ?',
        answers: [
            { text: 'Có, tôi tin rằng những chủ đề này rất quan trọng trong mối quan hệ', points: 10 },
            { text: 'Tôi có thể thảo luận nhưng đôi khi cảm thấy không thoải mái.', points: 5 },
            { text: 'Tôi chỉ nói khi đối phương hỏi, còn lại tôi thường né tránh.', points: 3 },
            { text: 'Tôi không thích nói về những chủ đề nhạy cảm vì sợ mâu thuẫn.', points: 0 },
        ],
    },
    {
        question: 'Bạn có thường lập kế hoạch chi tiêu và tiết kiệm không?',
        answers: [
            { text: 'Tôi luôn có kế hoạch chi tiêu rõ ràng và dành một phần thu nhập để tiết kiệm.', points: 10 },
            { text: 'Tôi cố gắng tiết kiệm nhưng đôi khi chi tiêu không kiểm soát.', points: 5 },
            { text: 'Tôi thường tiêu hết tiền lương hàng tháng mà không nghĩ đến tiết kiệm.', points: 3 },
            { text: 'Tôi không quan tâm đến kế hoạch tài chính, cứ có tiền là tiêu.', points: 0 },
        ],
    },
    {
        question: 'Bạn và đối phương đã thảo luận về việc chia sẻ tài chính chưa?',
        answers: [
            { text: 'Có, chúng tôi đã bàn bạc rõ ràng về cách quản lý tài chính chung và riêng.', points: 10 },
            { text: 'Chúng tôi đã nói sơ qua nhưng chưa có kế hoạch cụ thể.', points: 5 },
            { text: 'Tôi nghĩ đây là vấn đề cá nhân, ai kiếm tiền người đó quản lý.', points: 3 },
            { text: 'Tôi chưa từng nghĩ đến việc này', points: 0 },
        ],
    },
    {
        question: 'Bạn cảm thấy hài lòng với công việc hiện tại chứ?',
        answers: [
            { text: 'Tôi có công việc ổn định, thu nhập tốt và cơ hội phát triển lâu dài.', points: 10 },
            { text: 'Tôi đang hài lòng nhưng vẫn muốn cải thiện công việc trong tương lai.', points: 5 },
            { text: 'Tôi chưa hài lòng nhưng tạm chấp nhận vì chưa có lựa chọn tốt hơn.', points: 3 },
            { text: 'Tôi đang thất nghiệp hoặc không có thu nhập ổn định.', points: 0 },
        ],
    },
    {
        question: 'Bạn có dự định về việc mua nhà, có con, hoặc các mục tiêu dài hạn khác không?',
        answers: [
            { text: 'Tôi đã có kế hoạch cụ thể và đang từng bước thực hiện.', points: 10 },
            { text: 'Tôi có ý tưởng nhưng chưa thực sự bắt đầu thực hiện.', points: 5 },
            { text: 'Tôi chưa nghĩ đến điều này một cách nghiêm túc.', points: 3 },
            { text: 'Tôi không muốn lên kế hoạch xa vì tương lai còn nhiều thay đổi.', points: 0 },
        ],
    },
    {
        question: 'Bạn mong đợi điều gì từ một cuộc hôn nhân?',
        answers: [
            { text: 'Một mối quan hệ bền vững dựa trên sự tôn trọng, đồng hành và chia sẻ trách nhiệm.', points: 10 },
            { text: 'Một cuộc sống hạnh phúc, ít xung đột và luôn tràn đầy yêu thương', points: 5 },
            { text: 'Một sự đảm bảo về tài chính, ổn định và an toàn lâu dài.', points: 3 },
            { text: 'Tôi chưa có kỳ vọng rõ ràng về hôn nhân.', points: 0 },
        ],
    },
    {
        question: 'Tình yêu với bạn là sự lãng mạn, sự hỗ trợ, hay điều gì khác?',
        answers: [
            { text: 'Sự đồng hành, tôn trọng và thấu hiểu giữa hai người.', points: 10 },
            { text: 'Sự lãng mạn, những cử chỉ ngọt ngào và cảm xúc mãnh liệt.', points: 5 },
            { text: 'Sự hỗ trợ và cùng nhau vượt qua khó khăn trong cuộc sống.', points: 3 },
            { text: 'Tôi chưa có định nghĩa rõ ràng về tình yêu.', points: 0 },
        ],
    },
    {
        question: 'Bạn nghĩ vai trò của mỗi người trong hôn nhân nên như thế nào?',
        answers: [
            { text: 'Bình đẳng, cả hai cùng chia sẻ trách nhiệm và quyết định.', points: 10 },
            { text: 'Người chồng là trụ cột tài chính, vợ lo việc gia đình.', points: 5 },
            { text: 'Mỗi người có vai trò riêng nhưng cần linh hoạt tùy hoàn cảnh.', points: 3 },
            { text: 'Tôi chưa thực sự nghĩ về điều này.', points: 0 },
        ],
    },
    {
        question: 'Bạn và đối phương có cùng quan điểm về cuộc sống không?',
        answers: [
            { text: 'Có, chúng tôi chia sẻ nhiều giá trị và quan điểm giống nhau.', points: 10 },
            { text: 'Cơ bản là giống nhau, nhưng vẫn có một số khác biệt nhỏ.', points: 5 },
            { text: 'Chúng tôi có nhiều khác biệt nhưng vẫn đang tìm cách dung hòa.', points: 3 },
            { text: 'Chúng tôi có quan điểm rất khác nhau và thường tranh cãi về điều này.', points: 0 },
        ],
    },
    {
        question: 'Bạn có cảm thấy mình đang ở trạng thái tinh thần tốt không?',
        answers: [
            { text: 'Tôi cảm thấy tinh thần ổn định, hạnh phúc và ít khi bị căng thẳng.', points: 10 },
            { text: 'Tôi đôi khi cảm thấy căng thẳng nhưng vẫn kiểm soát được cảm xúc của mình.', points: 5 },
            { text: 'Tôi thường xuyên cảm thấy áp lực, lo lắng hoặc có dấu hiệu stress kéo dài.', points: 3 },
            { text: 'Tôi đang gặp nhiều vấn đề về tinh thần và cảm thấy khó kiểm soát cảm xúc.', points: 0 },
        ],
    },
    {
        question: 'Bạn có chăm sóc tốt cho sức khỏe cá nhân không?',
        answers: [
            { text: 'Tôi duy trì chế độ ăn uống lành mạnh, tập thể dục thường xuyên và kiểm tra sức khỏe định kỳ.', points: 10 },
            { text: 'Tôi có chăm sóc sức khỏe nhưng đôi khi lơ là do bận rộn.', points: 5 },
            { text: 'Tôi không quá quan tâm đến sức khỏe nhưng vẫn thấy ổn.', points: 3 },
            { text: 'Tôi thường xuyên bỏ bê sức khỏe và không có thói quen sống lành mạnh.', points: 0 },
        ],
    },
    {
        question: 'Bạn và đối phương đã từng đối mặt với những khó khăn nào trong mối quan hệ?',
        answers: [
            { text: 'Chúng tôi từng gặp khó khăn nhưng đã cùng nhau giải quyết ổn thỏa.', points: 10 },
            { text: 'Chúng tôi có xung đột đôi khi nhưng vẫn đang cố gắng điều chỉnh.', points: 5 },
            { text: 'Chúng tôi có nhiều vấn đề chưa thể giải quyết dứt điểm.', points: 3 },
            { text: 'Chúng tôi thường xuyên mâu thuẫn và không tìm ra hướng giải quyết chung.', points: 0 },
        ],
    },
    {
        question: 'Gia đình hoặc bạn bè của bạn có ủng hộ mối quan hệ này không?',
        answers: [
            { text: 'Có, họ hoàn toàn ủng hộ và tin tưởng vào lựa chọn của tôi.', points: 10 },
            { text: 'Họ có một số băn khoăn nhưng vẫn tôn trọng quyết định của tôi.', points: 5 },
            { text: 'Họ phản đối một phần vì có lo ngại về đối phương hoặc mối quan hệ.', points: 3 },
            { text: 'Họ phản đối mạnh mẽ và không đồng ý với mối quan hệ này.', points: 0 },
        ],
    },
    {
        question: 'Bạn có cân bằng được thời gian cho bản thân và mối quan hệ không?',
        answers: [
            { text: 'Tôi có thể sắp xếp thời gian hợp lý cho cả công việc, sở thích cá nhân và mối quan hệ.', points: 10 },
            { text: 'Đôi khi tôi bị cuốn vào công việc hoặc sở thích cá nhân và quên dành thời gian cho đối phương.', points: 5 },
            { text: 'Tôi thường ưu tiên hoàn toàn mối quan hệ, ít có thời gian riêng cho bản thân.', points: 3 },
            { text: 'Tôi không giỏi quản lý thời gian, thường cảm thấy bị áp lực khi phải cân bằng nhiều thứ.', points: 0 },
        ],
    },
    {
        question: 'Bạn có cảm thấy tự tin khi xử lý các vấn đề cá nhân mà không cần sự hỗ trợ từ người khác?',
        answers: [
            { text: 'Tôi có thể tự đưa ra quyết định và giải quyết vấn đề một cách độc lập.', points: 10 },
            { text: 'Tôi có thể tự lập trong hầu hết trường hợp nhưng đôi khi vẫn cần hỗ trợ.', points: 5 },
            { text: 'Tôi thường dựa vào người khác khi gặp khó khăn và thấy khó khăn khi phải tự giải quyết.', points: 3 },
            { text: 'Tôi không thích tự mình xử lý vấn đề và luôn cần người đồng hành.', points: 0 },
        ],
    },
    {
        question: 'Bạn có chấp nhận rằng đối phương cần không gian riêng không?',
        answers: [
            { text: 'Có, tôi hiểu và tôn trọng nhu cầu có thời gian riêng của cả hai.', points: 10 },
            { text: 'Tôi chấp nhận nhưng đôi khi cảm thấy lo lắng hoặc không thoải mái.', points: 5 },
            { text: 'Tôi nghĩ trong hôn nhân, cả hai nên dành hầu hết thời gian cho nhau.', points: 3 },
            { text: 'Tôi không thích việc đối phương dành thời gian riêng mà không có tôi bên cạnh.', points: 0 },
        ],
    },
    {
        question: 'Bạn có nắm rõ các quyền và trách nhiệm pháp lý trong hôn nhân không?',
        answers: [
            { text: 'Có, tôi hiểu rõ về các quyền, nghĩa vụ tài chính, con cái và tài sản chung trong hôn nhân.', points: 10 },
            { text: 'Tôi có biết một số điều cơ bản nhưng chưa tìm hiểu kỹ.', points: 5 },
            { text: 'Tôi chưa quan tâm đến các vấn đề pháp lý trong hôn nhân.', points: 3 },
            { text: 'Tôi nghĩ những vấn đề này không quan trọng và chỉ cần yêu nhau là đủ.', points: 0 },
        ],
    },
    {
        question: 'Bạn có sẵn sàng thích nghi với văn hóa hoặc gia đình của đối phương không?',
        answers: [
            { text: 'Có, tôi tôn trọng và sẵn sàng hòa nhập với gia đình đối phương.', points: 10 },
            { text: 'Tôi sẽ cố gắng nhưng có thể gặp khó khăn nếu có quá nhiều khác biệt.', points: 5 },
            { text: 'Tôi lo lắng về sự khác biệt giữa hai gia đình và chưa biết cách thích nghi.', points: 3 },
            { text: 'Tôi không quan tâm lắm đến gia đình đối phương, chỉ cần hai chúng tôi yêu nhau là đủ.', points: 0 },
        ],
    },
    {
        question: 'Bạn đã từng nghĩ đến các khía cạnh thực tế của việc tổ chức hôn lễ chưa?',
        answers: [
            { text: 'Có, tôi đã nghĩ đến ngân sách, địa điểm, danh sách khách mời và những điều cần chuẩn bị.', points: 10 },
            { text: 'Tôi có hình dung nhưng chưa lập kế hoạch chi tiết.', points: 5 },
            { text: 'Tôi nghĩ đây là việc của gia đình hai bên nên chưa quan tâm nhiều.', points: 3 },
            { text: 'Tôi chưa bao giờ nghĩ đến và cảm thấy chưa sẵn sàng lo liệu cho hôn lễ.', points: 0 },
        ],
    },
    {
        question: 'Bạn có mong muốn có con không? Nếu có, bạn đã thảo luận với đối phương về thời điểm và cách nuôi dạy con chưa?',
        answers: [
            { text: 'Có, tôi và đối phương đã thảo luận về thời điểm và cách nuôi dạy con.', points: 10 },
            { text: 'Tôi muốn có con nhưng chưa thảo luận kỹ với đối phương.', points: 5 },
            { text: 'Tôi chưa chắc chắn về việc có con hay không.', points: 3 },
            { text: 'Tôi không muốn có con và chưa bao giờ nghĩ đến việc này.', points: 0 },
        ],
    },
    {
        question: 'Bạn có đồng quan điểm với đối phương về cách giáo dục và chăm sóc con cái không?',
        answers: [
            { text: 'Có, chúng tôi có chung quan điểm về cách nuôi dạy con.', points: 10 },
            { text: 'Chúng tôi có một số điểm khác biệt nhưng sẵn sàng tìm giải pháp chung.', points: 7 }, // TODO
            { text: 'Chúng tôi chưa bao giờ thảo luận về vấn đề này.', points: 3 },
            { text: 'Tôi nghĩ đây là chuyện sau này, không cần bàn bạc trước.', points: 0 },
        ],
    },
    {
        question: 'Bạn có kế hoạch tài chính để lo cho con trong tương lai không?',
        answers: [
            { text: 'Có, tôi đã tính toán về chi phí nuôi dạy con và có kế hoạch tiết kiệm.', points: 10 },
            { text: 'Tôi biết nuôi con tốn kém nhưng chưa có kế hoạch tài chính cụ thể.', points: 5 },
            { text: 'Tôi chưa nghĩ đến vấn đề này.', points: 3 },
            { text: 'Tôi không quan tâm đến việc chuẩn bị tài chính cho con.', points: 0 },
        ],
    },
    {
        question: 'Bạn có cảm thấy hài lòng với mức độ gắn kết tình cảm hiện tại với đối phương không?',
        answers: [
            { text: 'Có, chúng tôi luôn cảm thấy gần gũi và hiểu nhau.', points: 10 },
            { text: 'Đôi khi tôi cảm thấy có khoảng cách giữa hai người.', points: 5 },
            { text: 'Tôi thường xuyên cảm thấy xa cách và không được thấu hiểu.', points: 3 },
            { text: 'Tôi không chắc về cảm xúc của mình đối với đối phương.', points: 0 },
        ],
    },
    {
        question: 'Bạn và đối phương có cùng quan điểm về đời sống tình dục trong hôn nhân không?',
        answers: [
            { text: 'Có, chúng tôi đã thảo luận và hiểu rõ nhu cầu của nhau.', points: 10 },
            { text: 'Chúng tôi chưa thảo luận nhưng tôi nghĩ chúng tôi sẽ hòa hợp.', points: 5 },
            { text: 'Chúng tôi có quan điểm khác nhau và chưa tìm ra giải pháp.', points: 3 },
            { text: 'Tôi chưa bao giờ nghĩ đến vấn đề này.', points: 0 },
        ],
    },
    {
        question: 'Bạn có chủ động tìm cách làm mới mối quan hệ để tránh sự nhàm chán không?',
        answers: [
            { text: 'Có, tôi thường lên kế hoạch cho những buổi hẹn hò hoặc hoạt động đặc biệt.', points: 10 },
            { text: 'Đôi khi tôi cố gắng nhưng không phải lúc nào cũng làm được.', points: 5 },
            { text: 'Tôi nghĩ tình yêu tự nhiên sẽ duy trì mà không cần nỗ lực.', points: 3 },
            { text: 'Tôi không quan tâm đến vấn đề này.', points: 0 },
        ],
    },
    {
        question: 'Khi gặp khó khăn (tài chính, gia đình, sự nghiệp…), bạn và đối phương có thể cùng nhau tìm ra giải pháp không?',
        answers: [
            { text: 'Có, chúng tôi luôn hỗ trợ nhau khi có khó khăn.', points: 10 },
            { text: 'Chúng tôi thường tìm cách giải quyết nhưng đôi khi có mâu thuẫn.', points: 5 },
            { text: 'Tôi thường tự giải quyết mà không chia sẻ với đối phương.', points: 3 },
            { text: 'Tôi cảm thấy không thể dựa vào đối phương khi có khó khăn.', points: 0 },
        ],
    },
    {
        question: 'Bạn có thích Site của tụi mình không <:)',
        answers: [
            { text: 'Rất thích :D', points: 10 },
            { text: 'Thích :)', points: 10 },
            { text: 'Hơi Mid :l', points: 10 },
            { text: 'Không :(', points: 10 },
            { text: 'Chê B-)', points: 10 },
            { text: 'Bớt hỏi, trả lời rồi (╯‵□′)╯︵┻━┻', points: 10 },
        ],
    },
];
