export interface RotationArrowProps {
    cx: number;
    cy: number;
    /** Outer radius of the body being rotated (e.g. gear outer radius). */
    bodyRadius: number;
    /** Direction of rotation. */
    clockwise: boolean;
    /**
     * Arc span in degrees. Defaults to 120°. Arc is centred on `baseAngleDeg`
     * so you can place it on the side away from any mating body.
     */
    spanDeg?: number;
    /**
     * Angle (deg, 0° = +x, CCW positive) around which the arc is centred.
     * Defaults to 90° (top of the circle).
     */
    baseAngleDeg?: number;
    /** Extra clearance beyond the minimum offset. Defaults to 0. */
    extraClearance?: number;
    /** Stroke colour — defaults to the dimension stroke. */
    color?: string;
}
/**
 * Rotation indicator drawn as a circular arc with an arrowhead.
 *
 * The arc sits at `bodyRadius + rotationClearance + extraClearance` from the
 * centre so it never cuts into the body it annotates or an adjacent mating
 * body. Caller should pass `baseAngleDeg` pointing away from any mating body
 * (e.g. for two gears meshing horizontally, use 90° on one and -90° on the
 * other so arrows arc above and below rather than through the mesh).
 *
 * Requires `<CuiDefs />` in the enclosing SVG for the `cui-arrow` marker.
 */
export declare function RotationArrow({ cx, cy, bodyRadius, clockwise, spanDeg, baseAngleDeg, extraClearance, color, }: RotationArrowProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=RotationArrow.d.ts.map