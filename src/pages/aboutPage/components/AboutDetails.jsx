import { useTheme } from "../../../contexts/ThemeContext";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";

export default function AboutDetailSection() {
  const { isDarkMode } = useTheme();

  // Define class names for dark and light modes
  const bgColor = isDarkMode ? "bg-gray-900" : "bg-white";
  const textColor = isDarkMode ? "text-gray-100" : "text-gray-700";

  return (
    <div className={`${bgColor} px-6 py-10 lg:px-6`}>
      <div className={`mx-auto max-w-3xl text-base leading-7 ${textColor}`}>
      <h1 className={`mt-1 text-3xl font-bold tracking-tight ${textColor} sm:text-4xl`}>
          About Us
        </h1>
        <div className="mt-8 max-w-10xl">
   
          <p className="mt-2">
            Although Climate Change is a global problem, yet Pakistan is one of
            the most affected countries, and therefore warrants some
            extraordinary steps to stem the tide. However, there could be no
            short-term solutions. In fact, considering the quantum of challenge
            the country is faced with, the entire nation needs to be sensitized.
            In this regard, the starting point, as per the School Education
            Department, South Punjab, could be sensitizing the next generation
            by imparting Climate Change related education at our schools. With
            this aim in view, the Department has launched a pilot project at
            Multan, which would be upscaled to public schools of entire South
            Punjab in due course of time.
          </p>
          <p className="mt-2">
            It would not be out of place to mention here that if one refers to
            the UNESCO’s published report on “Getting every school
            climate-ready; How countries are integrating climate change issues
            in education”, one would find out that Climate Change is not being
            taught as a separate subject at schools’ level anywhere in the
            world. It could therefore be a unique honour for Pakistan to become
            a trendsetter in this regard for entire international community.
          </p>
          <p className="mt-2">
            The hallmark of imparting education of this subject is the
            Children’s Green Book, which has been prepared with input from all
            stakeholders, including the subject experts, and covers all topics
            related to Climate Change and allied matters such as forestry,
            agriculture, horticulture and more. Needless to mention here, it
            took efforts of more than 1.5 years to compile first edition of the
            book.
          </p>
          <h2 className={`mt-10 text-2xl font-bold tracking-tight ${textColor}`}>
            SALIENT FEATURES:
          </h2>
          <ul role="list" className="mt-5 max-w-xl space-y-8">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-4 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                The Children of 11-12 years of age are the target audience of
                the book. It has therefore been drafted/prepared while keeping
                the mental ago of this group in view. More specifically, the
                book is being introduced at the level of class 7 at public
                schools. It is believed that children at this stage are neither
                old enough where their attitudes and habits have already been
                formed, nor too young where they might not be able to understand
                the complexities of Climate Change.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-4 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                The book has been drafted in Urdu as it is supposed to be taught
                in public schools. However, work has already been started on
                converting/translating it in English too so that the students of
                English medium schools might also get benefitted. An English
                version would also help introduce this book at regional, if not
                larger international, level.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-4 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                The book has been written in such a manner that it revolves
                around the characters of a young girl and a boy so that every
                child shall associate with either of them, and feels as if it is
                his or her very own story.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-4 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                The book imparts practical knowledge in a story telling format.
                Where required, it also takes the form of a detailed
                conversation/dialogue between the main character(s) and elders
                or relevant experts.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-4 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                The book is light on text and heavy on illustrations, pictures,
                graphics etc. All in all, it has a colourful, attractive and
                interest-provoking outlook. High definition/resolution actual
                pictures of local species of flowers, plants and trees etc. have
                also been used where deemed necessary.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-4 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <p>
                All in all, there are 15 chapters. Each chapter has further been
                divided into following 3 parts:
              </p>
            </li>

            <li className="flex">
              <p className="ms-12">
                1- A narration/story covering any particular topic and
                elaborating its general details, from practical point of view.
                Hard scientific facts or theories have deliberately been
                avoided.
              </p>
            </li>
            <li className="flex">
              <p className="ms-12">
                2- Questions/exercises designed to tax the minds of the children
                and thus further enhance/strengthen their understanding and
                learnings.
              </p>
            </li>
            <li className="flex">
              <p className="ms-12">
                3- Practical activities: Each chapter has been complemented with
                appropriate practical work to be undertaken at school and home,
                as the case may be. One may reemphasize here the ultimate goal
                of the entire exercise is to equip the children with practical
                knowledge and not merely make him or her learn the theoretical
                aspects.
              </p>
            </li>

            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-4 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                The book also aims at breaking many stereotypes. A couple of
                examples are worth mentioning:
              </span>
            </li>
            <li className="flex">
              <p className="ms-12">
                1- One of the leading characters is that of the mother of young
                boy and girl. The lady has not been shown or presented as a
                housewife, confined only to her home. In fact, she is a well
                educated and enlightened working professional, who, at the same
                time, looks after her home as well. As a responsible citizen,
                she is well aware of the challenges, which the Climate Change is
                posing, and keeps preparing her children for them too.
              </p>
            </li>
            <li className="flex">
              <p className="ms-12">
                2- Given the fact that minorities have never got their due
                recognition and projection in our national life, we have
                painstakingly created a character of a teacher who belongs to a
                minority faith. He appears to be a very progressive and
                proactive person, and has been presented as the most loved
                teacher at school due to the qualities of his head and heart.
              </p>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-4 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                The book has been so written that apart from Climate Change, it
                keeps teaching civic responsibilities, life skills and other
                competencies of the sort to the students subtly interspersed
                here and there in the text all throughout the book.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-4 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                Though statedly the book is meant for children, yet it caters
                for the needs of all interested members of the family. It is
                therefore likely to evoke huge interest amongst all and sundry.
                In fact, we have termed it as a Children’s Green Book meant for
                the entire family.
              </span>
            </li>
          </ul>

          <h2 className={`mt-10 text-2xl font-bold tracking-tight ${textColor}`}>
            FUTURE PROGRESSION:
          </h2>

          <figure className="mt-5 border-l border-indigo-600 pl-9">
          <blockquote className={`text-gray-900 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <p>
                “The pilot project was launched at Multan in February, 2022.
                From next academic year, which kicks in from August 1, 2022, the
                Department intends to roll out it in Bahawalpur and Muzaffargarh
                too. Within one year, however, it would also be rolled out in
                the rest of the districts of South Punjab. The project has huge
                potential, and no wonder other provincial units as well as
                provincial governments may also adopt the project in due course
                of time and introduce Climate Change as a separate subject in
                their schools as well.”
              </p>
            </blockquote>
          </figure>
          <figure className="mt-5 border-l border-indigo-600 pl-9">
          <blockquote className={`text-gray-900 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <p>
                “First book of its type, it would become a trend setter in all
                likelihood, and generate such ideas in other persons and at
                other places not only in Pakistan but elsewhere in the world
                too.”
              </p>
            </blockquote>
          </figure>
          <figure className="mt-5 border-l border-indigo-600 pl-9">
          <blockquote className={`text-gray-900 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <p>
                “As stated above, the book is being translated into English too
                so that it could be introduced to a larger audience at home and
                abroad.”
              </p>
            </blockquote>
          </figure>
          <figure className="mt-5 border-l border-indigo-600 pl-9">
          <blockquote className={`text-gray-900 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <p>
                “A supportive website and Facebook page are being launched too
                for greater impact. Work is also been started soon to create
                audio and video as well as animated versions of the book.”
              </p>
            </blockquote>
          </figure>
          <figure className="mt-5 border-l border-indigo-600 pl-9">
          <blockquote className={`text-gray-900 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <p>
                “It is believed that the book, like all other such works, would
                go through an evolutionary process. Needless to say here, based
                on the review and input of stakeholders, and the lessons from
                the experience of having taught it at schools, next editions
                would be even better.”
              </p>
            </blockquote>
          </figure>
        </div>
        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="https://images.unsplash.com/photo-1457530378978-8bac673b8062?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="no image fetch"
          />
        </figure>

        <div className="mt-10 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            COLLABORATION WITH UNESCO:
          </h2>
          <p className="mt-6">
            Since amongst other objectives, the UNESCO also aims to help Member
            States to mitigate and adapt to Climate Change and achieve the
            relevant SDGs, its collaboration is being sought. One is certain
            that a collaboration between the UNESCO and SED South Punjab can go
            a long way in creating an informed and enlightened citizenry – the
            first and foremost step required to take the colossal challenge of
            Climate Change head-on.
          </p>
        </div>
      </div>
    </div>
  );
}
