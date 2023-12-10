// @path: @/app/page.tsx
import { availableModules } from '@/app/book';
import { H } from '@/app/shared/typography/h';
import { AppLink } from '@/app/shared/component/app-link';
import { P } from '@/app/shared/typography/p';
import { Li, Ul } from '@/app/shared/component/app-list';
import { AppText } from '@/app/shared/typography/app-text';

// Головна сторінка додатка "Чарівна Казка"
export default function Home() {
  return (
    <>
      <H>
        {/* Заголовок сторінки */}
        <AppText>Вітаю у Чарівній Казці</AppText>
      </H>
      <P>
        {/* Підзаголовок */}
        <AppText>Оберіть казку з переліку</AppText>
      </P>
      <Ul>
         {/* Створення списку доступних казок за допомогою мапування */}
        {availableModules.map((m) => (
          <Li key={m.id}>
            {/* Створення посилання на казку */}
            <AppLink href={`/${m.id}`}>
              {/* Виведення назви казки */}
              <AppText>{m.name}</AppText>
            </AppLink>
          </Li>
        ))}
      </Ul>
    </>
  );
}