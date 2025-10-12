import { ALL_COLLEGES } from "../data/colleges";

describe("College filter logic", () => {
  it("filters by name, state, and degree", () => {
    // Search for 'VIT', state 'Tamil Nadu', degree 'B.Tech'
    const term = "vit";
    const state = "Tamil Nadu";
    const degree = "B.Tech";
    const filtered = ALL_COLLEGES.filter((c) => {
      const nameMatch = c.name.toLowerCase().includes(term);
      const stateMatch = state === "all" || c.state === state;
      const degreeMatch =
        degree === "all"
          ? true
          : c.programs.some((p) =>
              p.toLowerCase().includes(degree.toLowerCase().replace(/\./g, ""))
            );
      return nameMatch && stateMatch && degreeMatch;
    });
    expect(filtered.length).toBe(1);
    expect(filtered[0].name).toBe("VIT Vellore");
  });

  it("returns all for no filters", () => {
    const filtered = ALL_COLLEGES.filter((c) => true);
    expect(filtered.length).toBe(8);
  });
});
