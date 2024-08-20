import { getCabinPrice } from "@/app/_lib/data-service";

async function Price({ cabinId }) {
  const { regular_pricee, discount } = await getCabinPrice(cabinId);

  return (
    <p className="mt-12 text-3xl flex gap-3 items-baseline">
      {discount > 0 ? (
        <>
          <span className="text-3xl font-[350]">
            ${regular_pricee - discount}
          </span>
          <span className="line-through font-semibold text-primary-600">
            ${regular_pricee}
          </span>
        </>
      ) : (
        <span className="text-3xl font-[350]">${regular_pricee}</span>
      )}
      <span className="text-primary-200">/ night</span>
    </p>
  );
}

export default Price;
